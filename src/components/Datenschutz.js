import React from "react";
import { Link } from "react-router-dom";

// Styling
import styled from "styled-components";

// Animation
import { motion } from "framer-motion";
import { toggleAnimation } from "../animations/animations";

const Datenschutz = () => {
  // Return -------------------------------------------------------------------

  return (
    <StyledDatenschutz>
      <motion.div initial="hidden" animate="visible" variants={toggleAnimation}>
        <h1>Datenschutzerklärung</h1>
        <h3>1. Datenschutz auf einen Blick</h3>
        <p>Allgemeine Hinweise</p>
        <p>
          Die folgenden Hinweise geben einen einfachen Überblick darüber, was
          mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website
          besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie
          persönlich identifiziert werden können. Ausführliche Informationen zum
          Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
          Datenschutzerklärung.
        </p>
        <p>Datenerfassung auf dieser Website</p>
        <p>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</p>
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt
          „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung
          entnehmen.
        </p>
        <p>Wie erfassen wir Ihre Daten?</p>
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein
          Kontaktformular eingeben. Andere Daten werden automatisch oder nach
          Ihrer Einwilligung beim Besuch der Website durch unsere IT- Systeme
          erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser,
          Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser
          Daten erfolgt automatisch, sobald Sie diese Website betreten.
        </p>
        <p>Wofür nutzen wir Ihre Daten?</p>
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gewährleisten. Andere Daten können zur Analyse Ihres
          Nutzerverhaltens verwendet werden.
        </p>
        <p>Welche Rechte haben Sie bezüglich Ihrer Daten?</p>
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft,
          Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu
          erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung
          dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur
          Datenverarbeitung erteilt haben, können Sie diese Einwilligung
          jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
          unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zuständigen Aufsichtsbehörde zu. Hierzu sowie
          zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an
          uns wenden.
        </p>
        <p>Analyse-Tools und Tools von Drittanbietern</p>
        <p>
          Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
          ausgewertet werden. Das geschieht vor allem mit sogenannten
          Analyseprogrammen. Detaillierte Informationen zu diesen
          Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
        </p>
        <h3>2. Hosting</h3>
        <p>Externes Hosting</p>
        <p>
          Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
          Die personenbezogenen Daten, die auf dieser Website erfasst werden,
          werden auf den Servern des Hosters gespeichert. Hierbei kann es sich
          v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
          Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
          Daten, die über eine Website generiert werden, handeln. Der Einsatz
          des Hosters erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
          potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und
          im Interesse einer sicheren, schnellen und effizienten Bereitstellung
          unseres Online-Angebots durch einen professionellen Anbieter (Art. 6
          Abs. 1 lit. f DSGVO). Unser Hoster wird Ihre Daten nur insoweit
          verarbeiten, wie dies zur Erfüllung seiner Leistungspflichten
          erforderlich ist und unsere Weisungen in Bezug auf diese Daten
          befolgen. Wir setzen folgenden Hoster ein: Netlify, Inc., located at
          2325 3rd Street, Suite 296, San Francisco, California 94107
        </p>
        <h3>3. Allgemeine Hinweise und Pflichtinformationen</h3>
        <p>Datenschutz</p>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung. Wenn Sie diese Website benutzen, werden
          verschiedene personenbezogene Daten erhoben. Personenbezogene Daten
          sind Daten, mit denen Sie persönlich identifiziert werden können. Die
          vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben
          und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck
          das geschieht. Wir weisen darauf hin, dass die Datenübertragung im
          Internet (z. B. bei der Kommunikation per E-Mail) 3 /
          8Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten
          vor dem Zugriff durch Dritte ist nicht möglich.
        </p>
        <p>Hinweis zur verantwortlichen Stelle</p>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist:
        </p>
        <p>Artur Klein Herzogstraße 60 40215 Düsseldorf</p>
        <p>E-Mail: arturklein.se@gmail.com</p>
        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
          o. Ä.) entscheidet.
        </p>
        <p>Speicherdauer</p>
        <p>
          Soweit innerhalb dieser Datenschutzerklärung keine speziellere
          Speicherdauer genannt wurde, verbleiben Ihre personenbezogenen Daten
          bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie
          ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung
          zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern
          wir keine anderen rechtlich zulässigen Gründe für die Speicherung
          Ihrer personenbezogenen Daten haben (z. B. steuer- oder
          handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall
          erfolgt die Löschung nach Fortfall dieser Gründe.
        </p>
        <p>Widerruf Ihrer Einwilligung zur Datenverarbeitung</p>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
          erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>
        <p>
          Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
          gegen Direktwerbung (Art. 21 DSGVO)
        </p>
        <p>
          WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER
          F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH
          AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER
          PERSONENBEZOGENEN DATEN WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN
          AUF DIESE BESTIMMUNGEN GESTÜTZTES PROFILING. DIE JEWEILIGE
          RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE
          DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
          IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
          SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE
          VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN
          ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG
          ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS.
          1 DSGVO). WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
          DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
          WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER PERSONENBEZOGENER
          DATEN ZUM ZWECKE DERARTIGER WERBUNG EINZULEGEN; DIES GILT AUCH FÜR DAS
          PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT.
          WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
          ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET
          (WIDERSPRUCH 4 / 8NACH ART. 21 ABS. 2 DSGVO).
        </p>
        <p>Beschwerderecht bei der zuständigen Aufsichtsbehörde</p>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
          Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
          Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
          besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe.
        </p>
        <p>Recht auf Datenübertragbarkeit</p>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
          oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an
          einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
          technisch machbar ist.
        </p>
        <p>SSL- bzw. TLS-Verschlüsselung</p>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder
          Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
          TLS- Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
          daran, dass die Adresszeile des Browsers von „http://“ auf „https://“
          wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die
          SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie
          an uns übermitteln, nicht von Dritten mitgelesen werden.
        </p>
        <p>Auskunft, Löschung und Berichtigung</p>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit an uns wenden.
        </p>
        <p>Recht auf Einschränkung der Verarbeitung</p>
        <p>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
          an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
          folgenden Fällen: Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
          personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit,
          um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht,
          die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
          verlangen. Wenn die Verarbeitung Ihrer personenbezogenen Daten
          unrechtmäßig geschah/geschieht, können Sie statt der Löschung die
          Einschränkung der Datenverarbeitung verlangen. Wenn wir Ihre
          personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur
          Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen
          benötigen, haben Sie das Recht, statt der Löschung die Einschränkung
          der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Wenn Sie
          einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine
          Abwägung zwischen Ihren und unseren Interessen vorgenommen werden.
          Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie
          das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
          Daten zu verlangen. Wenn Sie die Verarbeitung Ihrer personenbezogenen
          Daten eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
          abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
          Ausübung oder 5 / 8Verteidigung von Rechtsansprüchen oder zum Schutz
          der Rechte einer anderen natürlichen oder juristischen Person oder aus
          Gründen eines wichtigen öffentlichen Interesses der Europäischen Union
          oder eines Mitgliedstaats verarbeitet werden.
        </p>
        <p>Widerspruch gegen Werbe-E-Mails</p>
        <p>
          Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
          Kontaktdaten zur Übersendung von nicht ausdrücklich angeforderter
          Werbung und Informationsmaterialien wird hiermit widersprochen. Die
          Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im
          Falle der unverlangten Zusendung von Werbeinformationen, etwa durch
          Spam-E-Mails, vor.
        </p>
        <h3>4. Datenerfassung auf dieser Website</h3>
        <p>Kontaktformular</p>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter. Die Verarbeitung dieser Daten
          erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre
          Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
          Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen
          übrigen Fällen beruht die Verarbeitung auf unserem berechtigten
          Interesse an der effektiven Bearbeitung der an uns gerichteten
          Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung
          (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde. Die von
          Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis
          Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
          widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B.
          nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche
          Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
        </p>
        <p>Anfrage per E-Mail, Telefon oder Telefax</p>
        <p>
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
          Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
          (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
          gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter. Die Verarbeitung dieser Daten erfolgt auf
          Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der
          Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
          vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
          beruht die Verarbeitung auf unserem berechtigten Interesse an der
          effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1
          lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
          sofern diese abgefragt wurde. Die von Ihnen an uns per Kontaktanfragen
          übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
          auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der
          Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener
          Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
          insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
        </p>
        <h3>5. Plugins und Tools</h3>
        <p>Google Web Fonts (lokales Hosting)</p>
        <p>
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
          genannte Web Fonts, die von Google 6 / 8bereitgestellt werden. Die
          Google Fonts sind lokal installiert. Eine Verbindung zu Servern von
          Google findet dabei nicht statt.
        </p>
        <p>
          Weitere Informationen zu Google Web Fonts finden Sie unter
          https://developers.google.com/fonts/faq und in der
          Datenschutzerklärung von Google:
          https://policies.google.com/privacy?hl=de.
        </p>
        <p>Quelle:</p>
        <a href="https://www.e-recht24.de">
          <p>https://www.e-recht24.de</p>
        </a>
        <Link to="/">
          <button className="btn-secondary">Home</button>
        </Link>
      </motion.div>
    </StyledDatenschutz>
  );
  // --------------------------------------------------------------------------
};

// Styled Component -----------------------------------------------------------

const StyledDatenschutz = styled.div`
  margin: 0 auto;
  max-width: var(--maxWidth);
`;
// ----------------------------------------------------------------------------

export default Datenschutz;
