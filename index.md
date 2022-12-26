---
   layout: default
---

<div class="launchpad">

   <section class="launchpad-search">

      <form action="/search" method="GET">
         <label for="input__text">What do you want to know?</label><br>
         <input id="input__text" class="launchpad-searchbar" required type="search" placeholder="Search" name="q">
         <input type="submit" class="launchpad-search_submit" value="Go">
      </form>

   </section>



   <section class="launchpad-projects">

      <a href="/wiki" class="launchpad-project_card">
         <i class="ri-global-line project-icon"></i>
         <header>Wiki</header>
         Knowledge at your fingertips
      </a>

      <a href="/works" class="launchpad-project_card">
         <i class="ri-quill-pen-line project-icon"></i>
         <header>Works</header>
         Library of texts and documents
      </a>

      <a href="/polyglot" class="launchpad-project_card">
         <i class="ri-question-answer-line project-icon"></i>
         <header>Polyglot</header>
         Grammars, lexicons, and writing systems
      </a>

      <a href="/maps" class="launchpad-project_card">
         <i class="ri-road-map-line project-icon"></i>
         <header>Maps</header>

      </a>

      <a href="/symbols" class="launchpad-project_card">
         <i class="ri-flag-line project-icon"></i>
         <header>Symbols</header>
         Cultural emblems and iconography
      </a>

      <a href="/standards" class="launchpad-project_card">
         <i class="ri-barcode-line project-icon"></i>
         <header>Standards</header>
         Worldwide technical standards and symbols
         <!---regional codes, language & script codes, time zones, geographical positioning and coordinate systems, postal service & codes, transportation, IT standards and protocols, telecommunications, biological taxonomy, numerals & base system, mathematical notation, units of measurement, safety, essential medicine, chemical nomenclature, element symbols & periodic table, drug nomenclature, pharmacopeia & formulary, human rights & international humanitarian law, signage standards (public information, safety; typefaces, colours), library classification systems, language-independent mathematics, publication serial numbers, machine readable language, currencies?--->
      </a>

   </section>

</div>
