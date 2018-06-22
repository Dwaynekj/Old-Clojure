(defn two-comp
  [f g]
  (fn [& args]
    (f (apply g args))))

(defn n-comp
  [& args]
  (fn [& more-args]
    (loop [remaining (drop-last args) accum (apply (last args) more-args)]
      (if (empty? remaining)
        (do
          ;;(println "final a: " accum) ;;debugging
          ;;(println "final r: " (count remaining)) ;;debugging
          accum)
        (recur (do
                 ;;(println "current a: " accum)
                 ;;(println "current r: " (count (drop-last remaining))) ;;debugging
                 (drop-last remaining))
               (do
                 ;;(println "next a: " (apply (last remaining) accum)) ;;debugging
                 ((last remaining) accum)))))))


(def add10 (partial + 10))
((n-comp identity add10 add10 add10) 0)

((fn [& args] args) 0)
(last '(n-comp identity add10 add10 add10))