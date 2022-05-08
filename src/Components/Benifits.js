import React from "react";

function Benifits() {
    return (
        <div id="benifits" className="container py-5 mt-5">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="text-green">Unsere Benefits</h1>
                </div>
            </div>
            <div className="row">
                <BenifitComponent
                    img="/images/icons/Symbol311.png"
                    title="Analyse"
                    des="Erfahre mehr über dein Geschäft und deine Kunden und werte genaue Zahlen über z.B. Kaufverhalten, Kundenpräferenzen, Kennzahlen, Kundenerfahrungen und vieles mehr."
                />
                <BenifitComponent
                    img="/images/icons/Symbol312.png"
                    title="Digitale Sichtbarkeit"
                    des="Anstatt teure Online-Shops aufzubauen, gebe deinem Kundenkreis die einfache und schnelle Möglichkeit dein ganzes Unternehmen auf unserer Map zu entdecken. Zeige Ihnen den vollen Umfang deines Angebots."
                />
                <BenifitComponent
                    img="/images/icons/Symbol313.png"
                    title="Kundenbindung"
                    des="Das etablierte Stempelkarten-System kennt jeder. Digitalisiert macht es aber noch viel mehr Spaß. Belohne deine Kundschaft! Kommuniziere und interagiere mit ihnen und gib deinen Stammkunden tolle Deals & Aktionen."
                />
                <BenifitComponent
                    img="/images/icons/Gruppe 316.png"
                    title="Neukunden Gewinnung"
                    des="Lass deine Kundschaft dein Unternehmen weiterempfehlen. Unser Tool verbindet das Freundesnetzwerk deiner Kundschaft, um Deals zu teilen und die Qualität der Dienstleistung und Produkte weiterzugeben."
                />
                <BenifitComponent
                    img="/images/icons/Gruppe 314.png"
                    title="Marketing & Aktionen"
                    des="Durch unsere App haben wir ein intelligentes Marketing-System entwickelt, dass Kundschaft aus deiner Zielgruppe durch deine Aktionen anzieht für z.B. Neueröffnungen, Stehzeiten, Neukundengewinnung und Sichtbarkeit deines Geschäfts."
                />
                <BenifitComponent
                    img="/images/icons/Gruppe 315.png"
                    title="Prozess-Optimierung"
                    des="Zu einem digitalen Unternehmen gehört auch ein digitaler Prozess. Egal ob Buchung eines Termin, einer Dienstleistung oder eines Produkts, wir machen den Prozess einfach, automatisiert und übersichtlich."
                />
                <BenifitComponent
                    img="/images/icons/Gruppe 317.png"
                    title="Krisen sichern"
                    des="Die Einzelhandelsbranche stand in den letzten zwei Jahren noch nie vor so großen Herausforderung. Das wollen & können wir ändern! Selbst wenn dein Geschäft vorübergehend schließen muss, hast du immer noch direkten Kontakt zu deiner Kundschaft und die Möglichkeit, flexibel auf äußere Umstände zu reagieren und dein Angebot zu platzieren."
                />
                <BenifitComponent
                    img="/images/icons/Gruppe 318.png"
                    title="Bewertungssystem"
                    des="Um die Qualität authentisch und ehrlich nach außen zutragen, und das ohne fake Bewertungen, können deine Kunden den kompletten Umfang deines Unternehmens nicht nach Sternen sondern Ambiente, Dienstleistungen, Produkten und Personal intuitiv bewerten."
                />
            </div>
        </div>
    );
}

export default Benifits;

function BenifitComponent({ img, title, des }) {
    return (
        <div className="col-md-4 benifit-component px-4 mt-3">
            <img src={img} className="my-2" alt="" />
            <h3 className="text-red">{title}</h3>
            <p>{des}</p>
        </div>
    );
}
