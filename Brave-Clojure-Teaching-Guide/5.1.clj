;;macros and special forms have special evaluation results
;; clojure realizes lazy-seq in 32s
;; collection abstraction
;; common pattern where two fn do the same thing. One takes a rest param, the other a seq
;; apply explodes a seq for rest function
;; condp

(defn even-numbers
  ([] (even-numbers 0))
  ([n] (cons n (lazy-seq (even-numbers (+ n 2))))))

(take 10 (even-numbers))


(def sum #(reduce + %))
(def avg #(/( sum %) (count %)))

(defn stats

  [numbers]
  (map #(% numbers) [sum count avg]))

(stats [2 3 4])


(reduce (fn [new-map [key val]]
          (assoc new-map key (inc val)))
        {}
       {:max 30 :min 10 :mid 20})

(seq [{:c 3} {:b 2} {:a 1}])
(seq {:c 3 :d 4})

(reduce (fn [new-map [key val]]
          (if (> val 4)
            (assoc new-map key val)
            new-map))
        {}
        {:human 4.1
         :critter 3.9})

(def food-journal
  [{:month 1 :day 1 :human 5.3 :critter 2.3}
   {:month 1 :day 2 :human 5.1 :critter 2.0}
   {:month 2 :day 1 :human 4.9 :critter 2.1}
   {:month 2 :day 2 :human 5.0 :critter 2.5}
   {:month 3 :day 1 :human 4.2 :critter 3.3}
   {:month 3 :day 2 :human 4.0 :critter 3.8}
   {:month 4 :day 1 :human 3.7 :critter 3.9}
   {:month 4 :day 2 :human 3.7 :critter 3.6}])

(take-while #(< (:month %) 3) food-journal)
(drop-while #(< (:month %) 3) food-journal)

(some #(and (> (:critter %) 3) %) food-journal)


(def vampire-database
  {0 {:makes-blood-puns? false, :has-pulse? true :name "McFishwich"}
   1 {:makes-blood-puns? false, :has-pulse? true :name "McMackson"}
   2 {:makes-blood-puns? true, :has-pulse? false :name "Damon Salvatore"}
   3 {:makes-blood-puns? true, :has-pulse? true :name "Mickey Mouse"}})

(defn vampire-related-details
  [social-security-number]
  (Thread/sleep 1000)
  (get vampire-database social-security-number))

(defn vampire?
  [record]
  (and (:makes-blood-puns? record)
       (not (:has-pulse? record))))

(defn identify-vampire
  [social-security-numbers]
  (first (filter vampire?
                 (map vampire-related-details social-security-numbers))))

(time (identify-vampire (range 0 1000000)))

(:makes-blood-puns? nil)
(range 0 10)

(defn my-partial
  [partialized-fn & args]
  (fn [& more-args]
    (apply partialized-fn (into args more-args))))

(def add30 (my-partial + 30))
(add30 3)