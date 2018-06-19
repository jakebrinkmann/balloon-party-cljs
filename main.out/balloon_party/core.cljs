(ns balloon-party.core
  (:require [play-cljs.core :as p]
            [goog.events :as events])
  (:require-macros [balloon-party.music :refer [build-for-cljs]]))

(defonce game (p/create-game (.-innerWidth js/window) (.-innerHeight js/window)))
(defonce state (atom {}))

(def main-screen
  (reify p/Screen
    (on-show [this]
      (reset! state {:text-x 20 :text-y 30}))
    (on-hide [this])
    (on-render [this]
      (p/render game
        [[:fill {:color "lightblue"}
          [:rect {:x 0 :y 0 :width (.-innerWidth js/window) :height (.-innerHeight js/window)}]]
         [:fill {:color "lightgreen"}
          [:stroke {:color "green"}
           [:ellipse {:x (int (/ (.-innerWidth js/window) 2)) :y (int (/ (.-innerHeight js/window) 2)) 
                      :width 300 :height 300}]]]
         [:fill {:color "red"}
          [:ellipse {:x (:text-x @state) :y (:text-y @state) :width 50 :height 70}]]
         [:stroke {:colors [102]}
          [:curve {:x1 (+ (:text-x @state)  0) :y1 (+ (:text-y @state)  0) 
                   :x2 (+ (:text-x @state)  0) :y2 (+ (:text-y @state) 25) 
                   :x3 (+ (:text-x @state) 35) :y3 (+ (:text-y @state) 50) 
                   :x4 (- (:text-x @state) 70) :y4 (+ (:text-y @state) 99) }]]
          ]))))

(events/listen js/window "mousemove"
  (fn [event]
    (swap! state assoc :text-x (.-clientX event) :text-y (.-clientY event))))

(events/listen js/window "resize"
  (fn [event]
    (p/set-size game js/window.innerWidth js/window.innerHeight)))

(doto game
  (p/start)
  (p/set-screen main-screen))

; uncomment to generate a song and play it!

;(defonce audio (js/document.createElement "audio"))
;(set! (.-src audio) (build-for-cljs))
;(.play audio)

