(ns om-intro.core
  (:require [om.core :as om :include-macros true]
            [om.dom :as dom :include-macros true]))

(enable-console-print!)

(comment (def app-state (atom {:list ["Lion" "Zebra" "Buffalo" "Antelope"]})))

(def app-state
  (atom
   {:contacts
    [{:first "Ben" :last "Bitdiddle" :email "benb@mit.edu"}
     {:first "Alyssa" :middle-initial "P" :last "Hacker" :email "aphacker@mit.edu"}
     {:first "Eva" :middle "Lu" :last "Ator" :email "eval@mit.edu"}
     {:first "Louis" :last "Reasoner" :email "prolog@mit.edu"}
     {:first "Cy" :middle-initial "D" :last "Effect" :email "bugs@mit.edu"}
     {:first "Lem" :middle-initial "E" :last "Tweakit" :email "morebugs@mit.edu"}]}))

(defn contacts-view [app owner]
  (reify
    om/IRender
    (render [this]
            (dom/div nil
                     (dom/h2 "Contact list")
                     (apply dom/ul nil
                            (om/build-all contact-view (:contacts app)))))))

(defn contact-view [contact owner]
  (reify
    om/IRender
    (render [this]
            (dom/li nil (display-name contact)))))

(def app-history (atom [@app-state]))

(add-watch app-state :history
           (fn [key ref old new]
             (println "watch" old new)
             (when (and (= key :history)
                        (not= new (peek @app-history)))
             (swap! app-history conj new))))

(defn undo! []
  (when (not= (count @app-history) 1)
    (swap! app-history pop)
    (reset! app-state (peek @app-history))))

(defn app-view [app owner]
  (reify
    om/IRender
    (render [_]
            (dom/div #js {:className "app-view"}
                     (dom/h1 #js{:id "header"} (:text app))
                     (dom/button
                      #js {:onClick (fn [e] (om/transact! app :counter inc))}
                      "Click me!")
                     (dom/div nil (:counter app))
                     (dom/button
                       #js {:onCLick (fn [e] (undo!))}
                      "Undo")))))

(comment(om/root app-view app-state
         {:target (. js/document (getElementById "app"))}))
         ;; (.getElementById ) is the usual way
          ;;(. js/document is a special form)

(comment (om/root
 (fn [app owner]
   (dom/h2 nil (:text app)))
           app-state
           {:target (. js/document (getElementById "app0"))}))

(comment(defn stripe [text bgc]
  (let [st #js {:backgroundColor bgc}]
    (dom/li #js {:style st} text))))

(comment(om/root
 (fn [app owner]
   (apply dom/ul #js {:className "animals"}
          (map stripe (:list app) (cycle ["#ff0" "#fff"]))))
 app-state
 {:target (. js/document (getElementById "app0"))}))


(comment (swap! app-state assoc :text "Multiple Roots"))

(om/root contacts-view app-state
         {:target (. js/document (getElementById "contacts"))})

;;(om/root
 ;; (fn [app owner]
  ;;  (dom/h1 nil (:text app)))
  ;;app-state
  ;;{:target (. js/document (getElementById "app"))})
