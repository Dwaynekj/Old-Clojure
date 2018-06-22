(ns cls-intro.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require [cljs.core.async :refer [>! <! put! chan]]
            [goog.dom :as gdom]
            [goog.events :as events])
  (:import [goog.events EventType]))

(enable-console-print!)


;;(defn bar [c d]
;;  (+ c d))

;;(defn foo [a b]
;;  (bar a b))

;;(foo 1 2)

;;(.-body js/document)

;;(println "Hello world!")


;; cljs.core.async
;; Single Threaded world!
;;
(let [c (chan)]
  (go
   (>! c :hello)
   ;;Computation stops until someone reads
   (println "Put :hello in to c!"))
  (go
    (<! c))
  (println "After go!"))

(def current-count (atom 0))

(def button (gdom/getElement "clicker"))
(def counter (gdom/getElement "counter"))


;;We use put as we not in a go-block
;; We are not blocking
;; events/listen is a side effect
;; should unlisten
(defn click-chan [element]
  (let [c (chan)]
    (events/listen element EventType.CLICK
                   (fn [e] (put! c e)))
    c))

;;This is not a infinite loop
;; Channel pauses execution context until the next read
;; So it waits for the click
(let [c (click-chan button)]
  (go (loop []
        (<! c)
        (swap! current-count inc)
        (set! (.-innerHTML counter) @current-count)
        (recur))))

(click-chan button)
