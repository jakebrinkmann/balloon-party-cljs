(ns adzerk.boot-reload.public$.main (:require [adzerk.boot-reload.client :as client]))
(client/connect "ws://localhost:33029" {:ws-host nil, :asset-host nil, :on-jsload (fn* [] (+))})