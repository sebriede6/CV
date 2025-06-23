import profileImage from './images/IMG_20250405_153546.jpg';
import { Mail, MapPin, Phone, Linkedin, Globe2 } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 p-8 max-w-[21cm] mx-auto text-white print:bg-gray-900">
      <div className="grid grid-cols-[300px_1fr] gap-8">
        <aside className="bg-gray-800 p-6 rounded-lg">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-700 mb-4">
              <img
                src={profileImage}
                alt="Sebastian Riede-Zwätz - Professionelles Bewerbungsfoto"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="space-y-4 mb-8 text-center">
            <h1 className="text-2xl font-bold">Sebastian Riede-Zwätz</h1>
            <h2 className="text-lg text-gray-400">Junior JavaScript Developer mit Fokus auf Automatisierung</h2>
          </div>

          <div className="space-y-3 text-sm text-gray-300 mb-8">
             <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
                <span>Kindleber Straße 42 B, 99867 Gotha</span>
             </div>
             <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="tel:+491727718130" className="hover:underline">0172/7718130</a>
             </div>
             <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 flex-shrink-0" />
                <a href="mailto:sebriede6@gmail.com" className="hover:underline break-all">sebriede6@gmail.com</a>
             </div>
             <div className="flex items-center pt-2">
                 <Linkedin className="h-4 w-4 mr-2 flex-shrink-0" />
                 <a href="https://www.linkedin.com/in/sebastian-riede-zw%C3%A4tz-7097b2344/" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">LinkedIn Profil</a>
             </div>
              <div className="flex items-center">
                 <Globe2 className="h-4 w-4 mr-2 flex-shrink-0" />
                 <a href="https://sebriede6.github.io" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">Portfolio (GitHub Pages)</a>
             </div>
             <div className="flex items-center">
                 <Globe2 className="h-4 w-4 mr-2 flex-shrink-0" />
                 <a href="https://www.get-in-it.de/profil/bNdetW25SS0Jr1j8SG6hI34tTcygx3Nw" target="_blank" rel="noopener noreferrer" className="hover:underline break-all">Get-in-IT Profil</a>
             </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Kompetenzen</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-gray-400">Hard Skills</h4>
                <ul className="space-y-1 text-sm">
                  <li>JavaScript (ES6+)</li>
                  <li>Google Apps Script (Interesse & Einarbeitung)</li>
                  <li>API-Anbindung (REST)</li>
                  <li>Datenbanken (SQL & NoSQL Grundlagen)</li>
                  <li>Git / GitHub</li>
                  <li>Node.js, Express.js (Grundlagen)</li>
                  <li>TypeScript (Grundlagen)</li>
                  <li>HTML5, CSS3, Tailwind CSS</li>
                  <li>React, Vite</li>
                  <li>Agile Methoden / Scrum</li>
                  <li>AWS & Azure Cloud Grundlagen</li>
                </ul>
              </div>
              <div className="print-force-break-before">
                <h4 className="font-semibold mb-2 text-gray-400">Soft Skills</h4>
                <ul className="space-y-1 text-sm">
                  <li>Ehrgeiz & Lernbereitschaft (insb. GAS)</li>
                  <li>Zuverlässigkeit & Verantwortungsbewusstsein</li>
                  <li>Passion für Automatisierung & Scripting</li>
                  <li>Lösungsorientierung & analytisches Denken</li>
                  <li>Strukturiertheit & Selbstorganisation</li>
                  <li>Teamfähigkeit & Kommunikationsstärke</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Weitere Kenntnisse</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-gray-400">Sprachen</h4>
                <p className="text-sm">Deutsch (Muttersprache)<br />Englisch (Gute Grundkenntnisse / B1) </p>
              </div>
              <div>
                <div className="space-y-6 mt-14">
                  <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Zertifikate</h3>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li>
                      <a href="https://cp.certmetrics.com/amazon/en/public/verify/credential/5bbb970f902e4b2f9ed8dfd91c283daa" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        AWS Certified Cloud Practitioner
                      </a>
                    </li>
                    <li>
                      <a href="https://learn.microsoft.com/de-de/users/sebastian-3627/credentials/9de23ce6c671c0fc?ref=https%3A%2F%2Fwww.linkedin.com%2F" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Microsoft Certified: Azure Fundamentals
                      </a>
                    </li>
                    <li>
                      <a href="https://www.scrum.org/user/1546296/assessments" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        Certified ScrumMaster® (CSM)
                      </a>
                    </li>
                    <li>
                      <a href="https://cs.lpi.org/caf/Xamman/certification/verify/LPI000630784/tt6p3xbmly" target="_blank" rel="noopener noreferrer" className="hover:underline">
                        LPI Linux Essentials
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </aside>

        <main className="space-y-8">
          <section>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Profil</h3>
            <p className="text-gray-300">
              Motivierter Quereinsteiger mit fundierten JavaScript-Kenntnissen und starkem Interesse an der Entwicklung von Automatisierungslösungen, insb. im Google Workspace Umfeld mittels Google Apps Script. Ich bringe Ehrgeiz, schnelle Auffassungsgabe und systematische Problemlösungskompetenz mit, um Geschäftsanforderungen technisch umzusetzen. Ich suche eine Einstiegsposition, um meine JavaScript-Expertise anzuwenden, mich in Google Apps Script zu spezialisieren und durch innovative Skripte sowie schlanke Prozesse zum Erfolg Ihres Teams bei AUTO1 Group beizutragen. Portfolio und Online-Profile zeigen Details.
            </p>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Berufserfahrung & Weiterbildung</h3>
            <div className="space-y-6">
              <div id="weiterbildung-block" className="flex justify-between items-start">
                 <div className="pr-4">
                   <h4 className="font-semibold text-gray-300">Weiterbildung Webentwickler</h4>
                   <p className="text-gray-400 italic">Techstarter GmbH, deutschlandweit (remote)</p>
                   <p className="text-sm text-gray-500 mt-1">Vollzeit (12 Monate)</p>
                   <p className="font-semibold mt-2 text-gray-400 text-sm">Schwerpunkte:</p>
                   <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
                     <li>Frontend: HTML5, CSS3, JavaScript (ES6+), React, State Mgmt. (Context/Redux), Testing (Jest/RTL)</li>
                     <li>Backend: Node.js, Express.js, RESTful APIs</li>
                     <li>Tools & Methoden: Git, GitHub, Scrum, CI/CD (Grundl.)</li>
                     <li>Cloud: AWS Grundlagen (EC2, S3, IAM)</li>
                     <li>Datenbanken: SQL & NoSQL Grundlagen</li>
                     <li>UI/UX Grundlagen, Barrierefreiheit</li>
                   </ul>
                    <p className="font-semibold mt-2 text-gray-400 text-sm">Projekte:</p>
                    <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-4">
                        <li><strong>Portfolio:</strong> Online-Portfolio mit React, Vite, Tailwind CSS. <a href="https://sebriede6.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">[Link]</a></li>
                        <li><strong>TechQuiz:</strong> Interaktive Quiz-Webseite (React Frontend). <a href="https://techquiz.de/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-1">[Link]</a></li>
                    </ul>
                 </div>
                 <span className="text-gray-400 text-sm flex-shrink-0">08/2024 – 08/2025</span>
              </div>

              <div id="anlagenfahrer-block" className="flex justify-between items-start">
                <div className="pr-4">
                  <h4 className="font-semibold text-gray-300">Anlagenfahrer (Plasma-, Wasserstrahl-, Laseranlagen)</h4>
                  <p className="text-gray-400">Schmitz Cargobull Gotha AG, Gotha</p>
                  <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
                      <li>Bedienung & Überwachung CNC-gesteuerter Anlagen</li>
                      <li>Sicherstellung Produktionsqualität & Maßhaltigkeit</li>
                      <li>Wartung & kleinere Instandhaltungen</li>
                  </ul>
                </div>
                <span className="text-gray-400 text-sm flex-shrink-0">03/2016 – 08/2023</span>
              </div>
              <div className="flex justify-between items-start">
                <div className="pr-4">
                  <h4 className="font-semibold text-gray-300">Verfahrensmechaniker Transportbeton</h4>
                  <p className="text-gray-400">Dyckerhoff Beton GmbH & Co. KG, Wiesbaden</p>
                  <p className="text-gray-500 text-sm">Einsatz Thüringen, Projekt ICE Trasse Erfurt-Nürnberg</p>
                   <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
                       <li>Herstellung & Qualitätsprüfung Transportbeton</li>
                       <li>Steuerung & Überwachung Mischanlage</li>
                       <li>Disposition & Kundenbetreuung</li>
                   </ul>
                </div>
                <span className="text-gray-400 text-sm flex-shrink-0">07/2010 – 03/2016</span>
              </div>
              <div className="flex justify-between items-start">
                 <div className="pr-4">
                  <h4 className="font-semibold text-gray-300">Produktionsmitarbeiter</h4>
                  <p className="text-gray-400">Über AB Zeitpersonal GmbH bei FABE GmbH, Eisenach/Großfahner</p>
                 </div>
                <span className="text-gray-400 text-sm flex-shrink-0">09/2006 – 07/2007</span>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Ausbildung & Schule</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                 <div className="pr-4">
                  <h4 className="font-semibold text-gray-300">Ausbildung zum Verfahrensmechaniker Transportbeton</h4>
                  <p className="text-gray-400">CEMEX Deutschland AG / Dyckerhoff Beton GmbH & Co. KG, Wiesbaden</p>
                  <p className="text-gray-500 text-sm">Abschluss: Facharbeiter (IHK, Note: gut)</p>
                </div>
                <span className="text-gray-400 text-sm flex-shrink-0">09/2007 – 06/2010</span>
              </div>
              <div className="flex justify-between items-start">
                 <div className="pr-4">
                  <h4 className="font-semibold text-gray-300">Gustav-Freytag-Gymnasium, Gotha-Siebleben</h4>
                  <p className="text-gray-400 text-sm">Abschluss: Realschulabschluss (nach Klasse 11)</p>
                </div>
                <span className="text-gray-400 text-sm flex-shrink-0">1998 – 2006</span>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;