import profileImage from './images/IMG_20250405_153546.jpg'; // <-- Pfad anpassen, falls nötig
import { Mail, MapPin, Phone, Linkedin, Globe2 } from 'lucide-react';

function App() {
  return (
    // Hinweis: Die meisten p-, m-, gap-, space-y- Klassen werden im Print-CSS überschrieben
    <div className="min-h-screen bg-gray-900 p-8 max-w-[21cm] mx-auto text-white print:bg-gray-900">
      <div className="grid grid-cols-[300px_1fr] gap-8">
        {/* Left Sidebar */}
        <aside className="bg-gray-800 p-6 rounded-lg">
          {/* Profile Photo */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden bg-gray-700 mb-4">
              <img
                src={profileImage}
                alt="Sebastian Riede-Zwätz - Professionelles Bewerbungsfoto"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Personal Info */}
          <div className="space-y-4 mb-8 text-center">
            <h1 className="text-2xl font-bold">Sebastian Riede-Zwätz</h1>
            <h2 className="text-lg text-gray-400">Junior Webentwickler</h2>
          </div>

          {/* Contact Details */}
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


          {/* Skills */}
          <div className="mb-8">
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Kompetenzen</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-gray-400">Hard Skills</h4>
                <ul className="space-y-1 text-sm">
                  <li>HTML5, CSS3 (Flexbox, Grid, Tailwind CSS)</li>
                  <li>JavaScript (ES6+), TypeScript (Grundlagen)</li>
                  <li>React, Vite</li>
                  <li>Node.js, Express.js (Grundlagen)</li>
                  <li>Git / GitHub</li>
                  <li>Datenbanken (SQL/NoSQL Grundlagen)</li>
                  <li>AWS Cloud und Azure Cloud</li>
                  <li>API-Anbindung (REST)</li>
                  <li>Agile Methoden / Scrum</li>
                </ul>
                 <p className="text-xs text-gray-500 mt-2 italic">
                   Weitere Details zu meinen Kenntnissen und Projekten finden Sie in meinem Online-Portfolio und auf meinen Profilen.
                 </p>
              </div>
              {/* Erzwungener Umbruch vor Soft Skills */}
              <div className="print-force-break-before">
                <h4 className="font-semibold mb-2 text-gray-400">Soft Skills</h4>
                <ul className="space-y-1 text-sm">
                  <li>Ehrgeiz & Lernbereitschaft</li>
                  <li>Zuverlässigkeit</li>
                  <li>Begeisterung für die Webentwicklung</li>
                  <li>Lösungsorientierung & Analytik</li>
                  <li>strukturierte Arbeitsweise</li>
                  <li>Teamfähigkeit</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Additional Information */}
          <div>
            <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Weitere Kenntnisse</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2 text-gray-400">Sprachen</h4>
                <p className="text-sm">Deutsch (Muttersprache)<br />Englisch (Gute Grundkenntnisse / B1) </p>
              </div>
              <div>
                {/* Certifications */}
                <div className="space-y-6 mt-14">
                  <h3 className="text-lg font-bold mb-4 border-b border-gray-700 pb-2">Zertifikate</h3>
                  {/* HINWEIS: Bitte die href="#" durch die tatsächlichen Links zu deinen Zertifikaten ersetzen */}
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

        {/* Main Content */}
        <main className="space-y-8">
          {/* Profile */}
          <section>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Profil</h3>
            <p className="text-gray-300">
              Motivierter Quereinsteiger in der Webentwicklung mit fundiertem technischen Hintergrund und starkem Fokus auf moderne Frontend-Technologien wie React. Ich bringe ausgeprägten Ehrgeiz, eine schnelle Auffassungsgabe und systematische Problemlösungskompetenz mit. Ich suche eine Einstiegsposition als Junior Webentwickler, um meine erworbenen Kenntnisse praktisch anzuwenden, mich kontinuierlich weiterzuentwickeln und zum Erfolg Ihres Teams beizutragen. Mein Portfolio und meine Online-Profile geben einen detaillierteren Einblick in meine Projekte und Fähigkeiten.
            </p>
          </section>

           {/* Work Experience (inkl. Weiterbildung) */}
          <section>
            <h3 className="text-xl font-bold mb-4 border-b border-gray-700 pb-2">Berufserfahrung & Weiterbildung</h3>
            <div className="space-y-6">

             {/* --- Techstarter Weiterbildung --- */}
              {/* ID hier hinzugefügt */}
              <div id="weiterbildung-block" className="flex justify-between items-start">
                 <div className="pr-4">
                   <h4 className="font-semibold text-gray-300">Weiterbildung zum Webentwickler</h4>
                   <p className="text-gray-400 italic">Techstarter GmbH, deutschlandweit (remote)</p>
                   <p className="text-sm text-gray-500 mt-1">Vollzeit-Weiterbildung (12 Monate)</p>
                   <p className="font-semibold mt-2 text-gray-400 text-sm">Schwerpunkte:</p>
                   <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
                     <li>Frontend: HTML5, CSS3 (Flexbox, Grid, Responsive Design), JavaScript (ES6+), React, State Management (z.B. Context API/Redux Toolkit), Testing (z.B. Jest, React Testing Library)</li>
                     <li>Backend: Node.js, Express.js, RESTful APIs</li>
                     <li>Tools & Methoden: Git, GitHub, Agile Entwicklung (Scrum), CI/CD (Grundlagen)</li>
                     <li>Cloud: AWS Grundlagen (EC2, S3, IAM, CloudFormation Basics)</li>
                     <li>Datenbanken: SQL (z.B. PostgreSQL) und NoSQL (z.B. DynamoDB) Grundlagen</li>
                     <li>UI/UX Grundlagen, Barrierefreiheit (Accessibility)</li>
                   </ul>
                    <p className="font-semibold mt-2 text-gray-400 text-sm">Projekte:</p>
                    <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-4">
                        <li><strong>Persönliches Portfolio:</strong> Entwicklung und Gestaltung meines Online-Portfolios zur Präsentation von Projekten und Fähigkeiten mittels React, Vite und Tailwind CSS.<a href="https://sebriede6.github.io/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-2">[sebriede6.github.io]</a></li>
                        <li><strong>Eigene Webseite - TechQuiz:</strong> Konzeption und Entwicklung einer interaktiven Quiz-Webseite zu Tech-Themen (React Frontend).<a href="https://techquiz.de/" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline ml-2">[techquiz.de]</a> </li>
                    </ul>
                 </div>
                 <span className="text-gray-400 text-sm flex-shrink-0">08/2024 – 08/2025</span> {/* KORREKTES DATUM EINTRAGEN */}
              </div>

              {/* --- Bisherige Berufserfahrung --- */}
              {/* ID hier hinzugefügt für gezielten Seitenumbruch davor */}
              <div id="anlagenfahrer-block" className="flex justify-between items-start">
                <div className="pr-4">
                  <h4 className="font-semibold text-gray-300">Anlagenfahrer (Plasma-, Wasserstrahl-, Laserschneidanlagen)</h4>
                  <p className="text-gray-400">Schmitz Cargobull Gotha AG, Gotha</p>
                  <ul className="list-disc list-inside text-sm text-gray-300 mt-1 space-y-1">
                      <li>Bedienung, Einrichtung und Überwachung CNC-gesteuerter Schneidanlagen</li>
                      <li>Sicherstellung der Produktionsqualität und Maßhaltigkeit</li>
                      <li>Durchführung von Wartungs- und kleineren Instandhaltungsarbeiten</li>
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
                       <li>Herstellung und Qualitätsprüfung von Transportbeton nach Norm</li>
                       <li>Steuerung und Überwachung der Mischanlage</li>
                       <li>Disposition und Kundenbetreuung</li>
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

          {/* Education */}
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