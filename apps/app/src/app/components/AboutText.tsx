const AboutText = () => {
  return (
    <>
      <p className="first">
        The Cedric Bixler-Zavala Lyrics Generator analyzes the word combinations
        present in Bixler-Zavala's body of work and attempts to piece together
        new lines using a Markov chain algorithm. Each phrase generated lands
        somewhere on a spectrum between excellent surreal imagery and utterly
        broken nonsense.
      </p>
      <div className="sources">
        <p>Lyric Sources</p>
        <table>
          <tbody>
            <tr>
              <td>Antemasque</td>
              <td>Antemasque</td>
            </tr>
            <tr>
              <td>At the Drive-In</td>
              <td>Hell Paso</td>
            </tr>
            <tr>
              <td>At the Drive-In</td>
              <td>Alfaro Vive, Carajo!</td>
            </tr>
            <tr>
              <td>At the Drive-In</td>
              <td>Acrobatic Tenement</td>
            </tr>
            <tr>
              <td>At the Drive-In</td>
              <td>El Gran Orgo</td>
            </tr>
            <tr>
              <td>At the Drive-In</td>
              <td>In/Casino/Out</td>
            </tr>
            <tr>
              <td>At the Drive-In</td>
              <td>Vaya</td>
            </tr>
            <tr>
              <td>At the Drive-In</td>
              <td>Sunshine / At the Drive-In</td>
            </tr>
            <tr>
              <td>At the Drive-In</td>
              <td>Relationship of Command</td>
            </tr>
            <tr>
              <td>At the Drive-In</td>
              <td>in•ter a•li•a</td>
            </tr>
            <tr>
              <td>At the Drive-In</td>
              <td>Diamanté</td>
            </tr>
            <tr>
              <td>El Grupo Nuevo de Omar Rodríguez-López</td>
              <td>Cryptomnesia</td>
            </tr>
            <tr>
              <td>The Mars Volta</td>
              <td>Tremulant</td>
            </tr>
            <tr>
              <td>The Mars Volta</td>
              <td>De-Loused in the Comatorium</td>
            </tr>
            <tr>
              <td>The Mars Volta</td>
              <td>Frances the Mute</td>
            </tr>
            <tr>
              <td>The Mars Volta</td>
              <td>Amputechture</td>
            </tr>
            <tr>
              <td>The Mars Volta</td>
              <td>The Bedlam in Goliath</td>
            </tr>
            <tr>
              <td>The Mars Volta</td>
              <td>Octahedron</td>
            </tr>
            <tr>
              <td>The Mars Volta</td>
              <td>Noctourniquet</td>
            </tr>
            <tr>
              <td>Omar Rodríguez-López</td>
              <td>Calibration</td>
            </tr>
            <tr>
              <td>Omar Rodríguez-López</td>
              <td>...Is Pushing Luck</td>
            </tr>
            <tr>
              <td>Omar Rodríguez-López</td>
              <td>The Palpitations Form a Limit</td>
            </tr>
            <tr>
              <td>Omar Rodríguez-López</td>
              <td>Se Dice Bisonte, No Búfalo</td>
            </tr>
            <tr>
              <td>Zavalaz</td>
              <td>Live Performances</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>Application created by Jon Lervold.</p>
      <p>
        <div>Markov generation function created with Python.</div>
        <div>User interface created with React.</div>
        <div>
          Code available on{' '}
          <a href="https://github.com/jonlervold/the-cedric-bixler-zavala-lyrics-generator">
            GitHub
          </a>
          .
        </div>
      </p>
      <p>
        This program is intended as a tribute and should not be interpreted as
        mockery. Cedric Bixler-Zavala and the projects he has been a part of,
        particularly The Mars Volta, are a major influence on my own artistic
        pursuits.
      </p>
      <p className="last">Potrait of Cedric Bixler-Zavala by Laura Lervold.</p>
    </>
  );
};

export default AboutText;
