const AboutText = () => {
  return (
    <>
      <p className="first">
        The Cedric Bixler-Zavala Lyrics Generator analyzes the word combinations
        present in Bixler-Zavala's lyrics spanning his career to date and
        attempts to piece together new lines using a Markov chain algorithm.
      </p>
      <div className="sources">
        <p>Lyric Sources:</p>
        <div>Antemasque - Antemasque</div>
        <div>At the Drive-In - Hell Paso</div>
        <div>At the Drive-In - Alfaro Vive, Carajo!</div>
        <div>At the Drive-In - Acrobatic Tenement</div>
        <div>At the Drive-In - El Gran Orgo</div>
        <div>At the Drive-In - In/Casino/Out</div>
        <div>At the Drive-In - Vaya</div>
        <div>At the Drive-In - Sunshine / At the Drive-In</div>
        <div>At the Drive-In - Relationship of Command</div>
        <div>At the Drive-In - in•ter a•li•a</div>
        <div>At the Drive-In - Diamanté</div>
        <div>El Grupo Nuevo de Omar Rodríguez-López - Cryptomnesia</div>
        <div>The Mars Volta - Tremulant</div>
        <div>The Mars Volta - De-Loused in the Comatorium</div>
        <div>The Mars Volta - Frances the Mute</div>
        <div>The Mars Volta - Amputechture</div>
        <div>The Mars Volta - The Bedlam in Goliath</div>
        <div>The Mars Volta - Octahedron</div>
        <div>The Mars Volta - Noctourniquet</div>
        <div>Omar Rodríguez-López - Calibration</div>
        <div>Omar Rodríguez-López - ...Is Pushing Luck</div>
        <div>Omar Rodríguez-López - The Palpitations Form a Limit</div>
        <div>Omar Rodríguez-López - Se Dice Bisonte, No Búfalo</div>
      </div>

      <p>Application created by Jon Lervold.</p>
      <p>
        <div>Markov generation function created with Python.</div>
        <div>User interface created with React.</div>
        <div>
          Code available on{' '}
          <a href="https://github.com/jonlervold/the-cedric-bixler-lyrics-generator">
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
