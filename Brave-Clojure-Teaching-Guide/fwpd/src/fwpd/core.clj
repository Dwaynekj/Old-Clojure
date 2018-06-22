(comment
  Done. Turn the result of your glitter filter into a list of names
  Done. Write a function, prepend, which will add a new suspect to the beginning of your list of suspects
  Done. Write a function, validate, which will check that :name and :glitter-index are present when you prepend. Validate should accept two arguments: a map of keywords to validating functions, similar to conversions, and the record to be validated
  Write a function which will take your list of maps and convert it back to a CSV string. You'll need to use the clojure.string/join function.
)

(ns fwpd.core
  (:require [clojure.string :as s]))

(def filename "suspects.csv")

(def headers->keywords {"Name" :name
                       "Glitter Index" :glitter-index})

(defn str->int
  [str]
  (Integer. str))

(def conversions {:name identity
                  :glitter-index str->int})

(defn parse
  [string]
  (map #(s/split % #",")
       (s/split string #"\n")))


(defn mapify
  [rows]
  (let [headers (map #(get headers->keywords %) (first rows))
        unmapped-rows (rest rows)]
    (map (fn [unmapped-row]
           (into {}
                 (map (fn [header column]
                        [header ((get conversions header) column)])
                      headers
                      unmapped-row)))
         unmapped-rows)))

;;Assignment #1

(defn glitter-filter
  [minimum-glitter records]
  (into [] (map :name
            (filter #(>= (:glitter-index %) minimum-glitter) records))))


;;Assignment #2
(defn prepend
  [suspects-list newName glitter-index]
    (conj suspects-list {:name newName :glitter-index glitter-index})
  )

(glitter-filter 3 (prepend (mapify (parse (slurp filename))) "Scarlet Fox" 4))


;; Notes
(get {:1 1 :2 2 :3 3} :1)
(def headers (map #(get headers->keywords %) ["Name" "Glitter Index"]))
(def row
  (map (fn [header column]
         [header ((get conversions header) column)])
       headers
       ["Edward Cullen" "10"]))

;;Assignment #3
(defn validate
  ([suspect validatefns]
   (map (fn [header]
         ((get validatefns header) (get suspect header)))
       [:name :glitter-index]
       ))

  ([suspect]
   (validate suspect {:name nil? :glitter-index nil?}))
  )
(validate {:name "Ed"})

(defn validate2
  [validatefns suspect]
  (map (fn [[expectedKey validatefn]]
         ;(str "key: " key ", val: " val))
         (validatefn (get suspect expectedKey)))
       validatefns)
  )

(validate2 {:name nil? :glitter-index nil?} {:name "superman"})


;;Assignment #4
(def keywords->headers {:name "Name"
                        :glitter-index "Glitter Index"})


(defn unparse
  [rows]
   (s/join
     "\n"
     (map #(s/join "," %) rows)
    ))

(map #(s/join "," % )
     '(["Name" "Glitter Index"] ["Edward Cullen" "10"] ["Bella Swan" "0"]
      ["Charlie Swan" "0"] ["Jacob Black" "3"] ["Carlisle Cullen" "6"]))

(defn int->str
  [int]
  (str int))

(int->str 10)

(def reconversions {:name identity
                  :glitter-index int->str})

((get reconversions :glitter-index) 10)

(seq {:name "Edward Cullen" :glitter-index 10})

(map (fn [[key val]]
             ((get reconversions key) val))
           {:name "Edward Cullen" :glitter-index 10})

(into []
      (map (fn [[key val]]
             ((get reconversions key) val))
           {:name "Edward Cullen" :glitter-index 10}))


(into [] (map (fn [[key val]]
                (get keywords->headers key))
              {:name "Edward Cullen" :glitter-index 10}))

(into [] (map (fn [[key val]]
                (get keywords->headers key))
              (first (mapify (parse (slurp filename))))))

(concat [:a :b] [[:c :d] [:e :f]])
(into [:a :b] [[:c :d] [:e :f]])
(concat [[:c :d] [:e :f]] [:a :b] )
(into [[:c :d] [:e :f]] [:a :b] )
(conj [[:c :d] [:e :f]] [:a :b] )
(conj '([:c :d] [:e :f]) [:a :b] )


(defn unmapify
  [suspects]
  (let [headers (into []
                      (map (fn [[key val]]
                             (get keywords->headers key))
                           (first suspects)))]
    (conj
     (map (fn [mapped-row]
            (into []
                  (map (fn [[header column]]
                         ((get reconversions header) column))
                       mapped-row)))
          suspects)
     headers)))

(unparse (unmapify (mapify (parse (slurp filename)))))
