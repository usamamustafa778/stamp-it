import React from "react";
import Button from "./Button";
import Slider from "./Slider";

function Mission() {
  return (
    <div id="mission" className="container-fluid mission py-5 mt-5">
        <div className="py-5"></div>
      <div className="container text-white">
        <div className="row">
          <div className="col-md-6">
            <h1>Unsere Mission</h1>
            <p>
              Wir sind ein junges Start-Up Unternehmen, bestehend aus einem
              5-köpfigem Team, verknüpft mit dem Fachwissen aus den
              verschiedensten Bereichen wie der Softwareentwicklung,
              Gastronomie, Beauty und des Einzelhandels. Unsere Mission ist es,
              Deutschland- und Europaweit den Dienstleistungssektor zu
              digitalisieren, um auch kleineren Unternehmen die Möglichkeit zu
              geben sich im Wandel der Digitalisierung erfolgreich zu
              positionieren. Das schaffen Sie mit Hilfe unserer App!
            </p>
            <h1 className="mt-5 text-yellow">Probleme die wir lösen</h1>
            <p>
              Nach langer Entwicklungsarbeit, etlichen Kundenbefragungen,
              Studien und Zusammenarbeit mit Restaurants und Beauty Salons,
              haben wir entscheidende Probleme im Dienstleistungssektor erkannt.
              Basierend auf diesen Erkenntnissen und Erfahrungen lösen wir
              Probleme wie z.B.:
            </p>
          </div>
          <div className="col-md-6">
            <Slider/>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-6">
            <p className="txt-grid">
              <img src="/images/icons/pt.png" alt="" />
              Fehlende Sichtbarkeit
            </p>
            <p className="txt-grid">
              <img src="/images/icons/pt.png" alt="" />
              Abhängigkeit von politischen und äußeren Umständen
            </p>
            <p className="txt-grid">
              <img src="/images/icons/pt.png" alt="" />
              Kommunikation und Interaktion außerhalb des Unternehmens
            </p>
            <p className="txt-grid">
              <img src="/images/icons/pt.png" alt="" />
              Veraltete Buchungs- und Bestellprozesse
            </p>
            <p className="txt-grid">
              <img src="/images/icons/pt.png" alt="" />
              Fehlende Übersicht über den eigenen Kundenstamm
            </p>
          </div>
          <div className="col-md-6">
            <p className="txt-grid">
              <img src="/images/icons/pt.png" alt="" />
              Keine Voraussicht in der Produkt- und Unternehmensentwicklung
            </p>
            <p className="txt-grid">
              <img src="/images/icons/pt.png" alt="" />
              Häufige Stehzeiten ohne Umsatz
            </p>
            <p className="txt-grid">
              <img src="/images/icons/pt.png" alt="" />
              Fehlende Marketingstrategien
            </p>
            <p className="txt-grid">
              <img src="/images/icons/pt.png" alt="" />
              Teure Online-Shops und Marketing-Agenturen
            </p>
          </div>
        </div>
        <div className="row mt-5 justify-content-center">
            <Button/>
        </div>
      </div>
      <div className="py-5"></div>
      <div className="py-5"></div>
    </div>
  );
}

export default Mission;
