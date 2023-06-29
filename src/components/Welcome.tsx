import React from "react";
import tine_regine from "../assets/TineRegine.png";
import { InfoCard } from "@dnb/eufemia";
import { check } from "@dnb/eufemia/icons"
import "../styles.css";


export default function Welcome() {
    
    return (
        
        <div className="parent" >
            
            <div className="headline" style={{display: 'flex', justifyContent: 'center'}}>
                <h1>
                    Velkommen til oss i DNB!
                </h1>
            </div>
            <div style={{padding: '0 20%'}}>
                <p>
                    I dag skal du få et lite innblikk i hvordan det er å jobbe i bank industrien.
                    Kanskje vi klarer å bli noen hverdagshelter ved å ta noen skurker 
                    via ulovlige traksaksjoner .. 
                </p>
                <div id="rectangle">

                </div>
                <div style={{padding: '4% 12%'}}>
                    <img src={tine_regine} alt="TineRegine" width="320" height="350" style={{float: 'left', padding: '25px'}} />
                    <div className="learingsmaal_punkter" style={{padding: '10% 12%'}}>
                        <ul >
                            <li >
                                <h4>Utvikling med programmeringsspråket Java (?)</h4>
                            </li>
                            <li>
                                <h4>Fange økonomiske skurker</h4>
                            </li>
                            <li>
                                <h4>Få en innsikt i bank industrien</h4>
                            </li>
                            <li>
                                <h4>Bli rikere ved å tukle med andres bankkontoer...</h4>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <p>
                        De ulike oppgavene er disponert over på menyen. Når du blir ferdig med
                        en oppgave, så kan du gå videre på neste. Det vi ønsker at du skal gjøre
                        vil ligge i klar tekst på hver oppgave-side. Vanskelighetsgraden vil variere,
                        men for å utfordre dere litt, så vil det bli litt vanskeligere for hver oppgave!
                    </p>
                    <p>
                        [Annet av praktisk informasjon]
                    </p>
                </div>
                
                <div className="askUsAnytime" style={{padding: '10% 30%'}}>
                    <InfoCard text="Spørsmål? Huk tak i oss da vel! Vi biter ikke :) " />
                </div>
            </div>
        
        </div>
        
    );
}