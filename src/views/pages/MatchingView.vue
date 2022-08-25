<template>
  <PageCard :header="'Matching: Finding all the patterns'">
    <template>
      <main>
        <Paragraph paragraph="During the matching phase, a set of all possible (overlapping) patterns the password contains of is collected. The algorithm recognizes seven distinctive patterns."></Paragraph>
        <div class="mb-20">
        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Token</h2>
        <Paragraph paragraph="The token matching tries to find a given password in one or more dictionaries by iterating over the wordlist. Uppercase letters and <a href='https://en.wikipedia.org/wiki/Leet' target='_blank' class='underline'>leetspeak</a> are transformed into the lowercase representation of the string beforehand."></Paragraph>
        <em>
        <div class="rounded bg-font-light p-10">
          <div class="relative mb-20">
          <span id= "token" class="block absolute top-0 transition duration-1000 linear" :class="tokenTransformed ? 'opacity-0' : 'opacity-1'">Shad0w</span>
          <span id= "token-transformed" class="block absolute top-0 transition duration-1000 linear" :class="tokenTransformed ? 'opacity-1' : 'opacity-0'">shadow</span>
          </div>
          <div>
          <span v-for="(value, key, index) in firstTwentyWordlist"
          :key="index"
          :id="value"
          class="token transition duration-500 linear">{{value}}, </span>
          <span>...</span>
          </div>
        </div>
        </em>
        <Button :handle-click="handleTokenAnimationButton"
                :is-disabled="animationButtons.tokensAnimationRunning">
          <template #icon>
            <span
                v-html='`<i class="fa-solid fa-play"></i>`'></span>
            <span> Play</span>
          </template>

        </Button>
        </div>

        <div class="mb-20">
        <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Sequence</h2>
        <Paragraph paragraph="The sequence matching is based on the unicode representation of a symbol. The algorithm determines if a sequence is present according to the delta between two adjacent symbols."></Paragraph>
        <em>
          <div class="rounded bg-font-light p-10">
            <div class="relative mb-10">
              <span id= "sequence" class="block top-0">123s864</span>
            </div>
            <table class=" text-left w-2/3 text-center">
              <tbody>
              <tr
                  class=" border-b dark:border-font-dark "
              >
                <td class="transition duration-500 linear sequence1">1</td>
                <td class="transition duration-500 linear sequence1 sequence2">2</td>
                <td class="transition duration-500 linear sequence2">3</td>
                <td>s</td>
                <td class="transition duration-500 linear sequence3">8</td>
                <td class="transition duration-500 linear sequence3 sequence4">6</td>
                <td class="transition duration-500 linear sequence4">4</td>
              </tr>
              <tr>
                <td class="transition duration-500 linear sequence1">U+0031</td>
                <td class="transition duration-500 linear sequence1 sequence2">U+0032</td>
                <td class="transition duration-500 linear sequence2">U+0033</td>
                <td>U+0073</td>
                <td class="transition duration-500 linear sequence3">U+0038</td>
                <td class="transition duration-500 linear sequence3 sequence4">U+0036</td>
                <td class="transition duration-500 linear sequence4">U+0034</td>
              </tr>
              <tr class="text-right">
                <td class="transition duration-500 linear sequence1">1</td>
                <td class="transition duration-500 linear sequence2">1</td>
                <td>40</td>
                <td>-35</td>
                <td class="transition duration-500 linear sequence3">-2</td>
                <td class="transition duration-500 linear sequence4">-2</td>
              </tr>
              </tbody>
            </table>
          </div>
        </em>
          <Button :handle-click="handleSequenceAnimationButton"
                  :is-disabled="animationButtons.sequenceAnimationRunning">
            <template #icon>
            <span
                v-html='`<i class="fa-solid fa-play"></i>`'></span>
              <span> Play</span>
            </template>

          </Button>
        </div>


        <div class="mb-20">
          <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Repeat</h2>
          <Paragraph paragraph="The repeat matcher searches for symbol repetitions through regular expressions. The longest match will always be prioritized."></Paragraph>
          <em>
            <div class="rounded bg-font-light p-10">
              <div class="relative mb-10">
                <span id= "repeatWord" class="block top-0">abbabb</span>
              </div>
              <div>
                <span id="repeat1" class="repeat">a </span>
                <span id="repeat2" class="repeat">b </span>
                <span id="repeat3" class="repeat">b</span>&nbsp;
                <span id="repeat4" class="repeat">a </span>
                <span id="repeat5" class="repeat">b </span>
                <span id="repeat6" class="repeat">b</span>
              </div>

            </div>
          </em>
          <Button :handle-click="handleRepeatAnimationButton"
                  :is-disabled="animationButtons.repeatAnimationRunning">
            <template #icon>
            <span
                v-html='`<i class="fa-solid fa-play"></i>`'></span>
              <span> Play</span>
            </template>

          </Button>
        </div>


        <div class="mb-20">
          <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Keyboard</h2>
          <Paragraph paragraph="The keyboard matcher analyzes the password for keyboard patterns by keeping track of neighbour keys. If the next key is adjacent to the previous one it will match. Zxcvbn supports different keyboard layouts per default. Additional ones can be added.  "></Paragraph>
          <em>
            <div class="rounded bg-font-light p-10">
              <div class="relative mb-10">
                <span class="block top-0">xcvghui</span>
              </div>
              <div>
                              <svg
                    width="1000"
                    height="138.49997"
                    id="svg8538">
                  <defs
                      id="defs8540" />
                  <sodipodi:namedview
                      id="base"
                      pagecolor="#ffffff"
                      bordercolor="#666666"
                      borderopacity="1.0"
                      inkscape:pageopacity="0.0"
                      inkscape:pageshadow="2"
                      inkscape:zoom="1.4"
                      inkscape:cx="298.17407"
                      inkscape:cy="157.15095"
                      inkscape:document-units="px"
                      inkscape:current-layer="layer1"
                      showgrid="false"
                      units="in"
                      inkscape:window-width="1390"
                      inkscape:window-height="804"
                      inkscape:window-x="20"
                      inkscape:window-y="20"
                      inkscape:window-maximized="0"
                      inkscape:showpageshadow="2"
                      inkscape:pagecheckerboard="0"
                      inkscape:deskcolor="#d1d1d1" />
                  <metadata
                      id="metadata8543">
                    <rdf:RDF>
                      <cc:Work
                          rdf:about="">
                        <dc:format>image/svg+xml</dc:format>
                        <dc:type
                            rdf:resource="http://purl.org/dc/dcmitype/StillImage" />
                        <dc:title />
                      </cc:Work>
                    </rdf:RDF>
                  </metadata>
                  <g
                      inkscape:label="Layer 1"
                      inkscape:groupmode="layer"
                      id="layer1"
                      transform="translate(-87.660736,-1227.8699)">
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 93.410734,1228.6199 h 14.999996 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 H 93.410734 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5302-3" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 121.41073,1228.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5304-6" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 149.41073,1228.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5306-7" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 177.41074,1228.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5308-5" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 205.41074,1228.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5310-3" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 233.41074,1228.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5312-5" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 261.41074,1228.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5314-6" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 289.41074,1228.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5316-2" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 317.41074,1228.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5318-9" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 345.41072,1228.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5320-1" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 373.41072,1228.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5322-2" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 401.41072,1228.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5324-7" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 429.41072,1228.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5326-0" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 457.41072,1228.6199 h 43 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -43 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5328-9" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 93.410734,1256.6199 h 28.999996 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 H 93.410734 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5332-3" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 135.41073,1256.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5334-6" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 163.41073,1256.6199 h 15.00001 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15.00001 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5336-0" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 191.41074,1256.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5338-6" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 219.41074,1256.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5340-2" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 247.41074,1256.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5342-6" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 275.41074,1256.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5344-1" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 303.41074,1256.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5346-8" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 331.41072,1256.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5348-7" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 359.41072,1256.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5350-9" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 387.41072,1256.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5352-2" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 415.41072,1256.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5354-0" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 443.41072,1256.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5356-2" />
                    <path
                        style="fill:none;fill-opacity:1;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 471.41072,1256.6199 h 29 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -29 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5358-3" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 93.410734,1284.6199 h 35.999996 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 H 93.410734 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5360-7" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 142.41073,1284.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5362-5" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 170.41074,1284.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77001,0 -5.00001,-2.23 -5.00001,-5 v -15 c 0,-2.77 2.23,-5 5.00001,-5 z"
                        id="rect5364-9" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 198.41074,1284.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5366-2" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 226.41074,1284.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5368-2" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 254.41074,1284.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5370-8" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 282.41074,1284.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5372-9" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 310.41074,1284.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5374-7" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 338.41072,1284.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5376-3" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 366.41072,1284.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5378-6" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 394.41072,1284.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5380-1" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 422.41072,1284.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5382-2" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 450.41072,1284.6199 h 50 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -50 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5384-9" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 93.410734,1312.6199 h 48.999996 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 H 93.410734 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5388-3" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 155.41073,1312.6199 h 15.00001 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15.00001 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5392-1" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 183.41074,1312.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5394-9" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 211.41074,1312.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5396-4" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 239.41074,1312.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5398-7" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 267.41074,1312.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5400-8" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 295.41074,1312.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5402-4" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 323.41074,1312.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5404-5" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 351.41072,1312.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5406-0" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 379.41072,1312.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5408-3" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 407.41072,1312.6199 h 15 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -15 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5410-6" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 435.41072,1312.6199 h 65 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -65 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5412-1" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 93.410734,1340.6199 h 23.999996 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 H 93.410734 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5416-0" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 130.41073,1340.6199 h 24 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -24 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5418-6" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 167.41073,1340.6199 h 24.00001 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -24.00001 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5420-3" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 204.41074,1340.6199 h 148 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -148 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5422-2" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 365.41072,1340.6199 h 24 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -24 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5424-0" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 402.41072,1340.6199 h 24 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -24 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5426-6" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 439.41072,1340.6199 h 24 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -24 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5428-1" />
                    <path
                        style="fill:none;stroke:#000000;stroke-width:1.5;stroke-linecap:square;stroke-linejoin:miter;stroke-miterlimit:4;stroke-dasharray:none;stroke-opacity:1"
                        d="m 476.41072,1340.6199 h 24 c 2.77,0 5,2.23 5,5 v 15 c 0,2.77 -2.23,5 -5,5 h -24 c -2.77,0 -5,-2.23 -5,-5 v -15 c 0,-2.77 2.23,-5 5,-5 z"
                        id="rect5430-5" />
                    <g
                        transform="translate(36.274016,829.43356)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:8px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5685-5">
                      <path
                          d="m 62.808594,467.69616 0.917968,0.35547 q -0.214843,0.96094 -0.714843,1.40625 -0.5,0.44141 -1.230469,0.44141 -0.917969,0 -1.488281,-0.70704 -0.65625,-0.8164 -0.65625,-2.20312 0,-1.46484 0.660156,-2.29297 0.574219,-0.71875 1.542969,-0.71875 0.789062,0 1.320312,0.53906 0.378906,0.38282 0.554688,1.13672 l -0.9375,0.27344 q -0.08984,-0.46484 -0.359375,-0.71094 -0.265625,-0.25 -0.628907,-0.25 -0.519531,0 -0.847656,0.45313 -0.328125,0.45312 -0.328125,1.49609 0,1.08203 0.320313,1.53906 0.320312,0.45703 0.832031,0.45703 0.375,0 0.648437,-0.28906 0.273438,-0.29297 0.394532,-0.92578 z"
                          id="path6254-4" />
                      <path
                          d="m 65.21875,466.91882 -0.816406,-0.17969 q 0.148437,-0.62891 0.488281,-0.90234 0.34375,-0.27735 0.984375,-0.27735 0.570312,0 0.871094,0.16016 0.300781,0.16015 0.429687,0.4375 0.128906,0.27344 0.128906,1 l -0.0078,1.28125 q 0,0.53906 0.04297,0.80469 0.04297,0.26171 0.160156,0.55859 H 66.609388 L 66.4922,469.3485 q -0.230468,0.27344 -0.496093,0.41016 -0.261719,0.13672 -0.558594,0.13672 -0.496094,0 -0.8125,-0.33203 -0.316406,-0.33594 -0.316406,-0.89063 0,-0.35156 0.128906,-0.61328 0.128906,-0.26172 0.363281,-0.41797 0.234375,-0.15625 0.75,-0.27734 0.625,-0.14453 0.871094,-0.26953 0,-0.34375 -0.05078,-0.44922 -0.04687,-0.10938 -0.179688,-0.17578 -0.128906,-0.0703 -0.367187,-0.0703 -0.242188,0 -0.382813,0.10937 -0.136719,0.10938 -0.222656,0.41016 z m 1.203125,0.89062 q -0.171875,0.0703 -0.535156,0.16406 -0.417969,0.10938 -0.546875,0.24219 -0.128907,0.13281 -0.128907,0.34375 0,0.23828 0.140625,0.40235 0.144532,0.16015 0.359375,0.16015 0.191407,0 0.378907,-0.1289 0.1875,-0.13282 0.257812,-0.3125 0.07422,-0.17969 0.07422,-0.65235 z"
                          id="path6256-7" />
                      <path
                          d="M 68.160156,465.65319 H 69 v 0.60938 q 0.171875,-0.32813 0.453125,-0.51563 0.28125,-0.1875 0.605469,-0.1875 0.582031,0 1,0.55469 0.421875,0.55469 0.421875,1.57422 0,1.07031 -0.421875,1.64062 -0.421875,0.56641 -1.003907,0.56641 -0.269531,0 -0.503906,-0.12891 -0.230469,-0.13281 -0.488281,-0.47656 v 2.08984 h -0.902344 z m 0.890625,2.00391 q 0,0.70312 0.226563,1.03515 0.230468,0.33204 0.554687,0.33204 0.308594,0 0.519531,-0.30469 0.210938,-0.3086 0.210938,-1.00391 0,-0.66015 -0.21875,-0.97265 -0.214844,-0.31641 -0.527344,-0.31641 -0.328125,0 -0.546875,0.30859 -0.21875,0.30469 -0.21875,0.92188 z"
                          id="path6258-6" />
                      <path
                          d="m 71.886719,468.61804 0.902343,-0.16797 q 0.117188,0.65234 0.726563,0.65234 0.324219,0 0.484375,-0.125 0.160156,-0.125 0.160156,-0.32422 0,-0.13672 -0.07031,-0.21484 -0.07422,-0.0781 -0.292969,-0.13672 -1.109375,-0.29297 -1.410156,-0.55859 -0.375,-0.33204 -0.375,-0.91016 0,-0.57813 0.367187,-0.92578 0.367188,-0.34766 1.066406,-0.34766 0.667969,0 1.015625,0.26172 0.347657,0.25781 0.488282,0.83594 l -0.847657,0.1914 q -0.113281,-0.5 -0.640625,-0.5 -0.332031,0 -0.472656,0.0977 -0.140625,0.0937 -0.140625,0.24609 0,0.13672 0.128906,0.22657 0.128907,0.0937 0.800782,0.28125 0.753906,0.21093 1.023437,0.51172 0.265625,0.30078 0.265625,0.80078 0,0.60156 -0.414062,0.99218 -0.410157,0.39063 -1.136719,0.39063 -0.660156,0 -1.078125,-0.32422 -0.417969,-0.32812 -0.550781,-0.95312 z"
                          id="path6260-5" />
                      <path
                          d="m 75.890625,469.80163 v -5.67969 h 0.945312 v 4.71485 h 2.359375 v 0.96484 z"
                          id="path6262-6" />
                      <path
                          d="m 79.648437,467.66882 q 0,-0.60938 0.242188,-1.10938 0.242187,-0.5 0.632812,-0.75 0.390625,-0.25 0.878907,-0.25 0.820312,0 1.289062,0.64453 0.46875,0.64063 0.46875,1.5 0,0.64063 -0.246094,1.15625 -0.242187,0.51563 -0.640625,0.77735 -0.394531,0.25781 -0.867187,0.25781 -0.757813,0 -1.257813,-0.57813 -0.5,-0.57812 -0.5,-1.64843 z m 0.921875,0.0586 q 0,0.62891 0.246094,0.95313 0.246094,0.32031 0.59375,0.32031 0.339844,0 0.582031,-0.32422 0.242188,-0.32422 0.242188,-0.95703 0,-0.61719 -0.246094,-0.94141 -0.246094,-0.32422 -0.589844,-0.32422 -0.339843,0 -0.585937,0.32422 -0.242188,0.32422 -0.242188,0.94922 z"
                          id="path6264-9" />
                      <path
                          d="m 86.839844,466.87975 -0.886719,0.19532 q -0.09766,-0.65235 -0.613281,-0.65235 -0.332032,0 -0.535157,0.28125 -0.203125,0.28125 -0.203125,0.94922 0,0.73828 0.203125,1.04297 0.203125,0.30469 0.542969,0.30469 0.253906,0 0.417969,-0.17188 Q 85.929687,468.65319 86,468.21179 l 0.886719,0.18359 q -0.273438,1.5 -1.574219,1.5 -0.832031,0 -1.234375,-0.63281 -0.402344,-0.63282 -0.402344,-1.52344 0,-1.06641 0.453125,-1.62109 0.457031,-0.5586 1.195313,-0.5586 0.597656,0 0.972656,0.31641 0.378906,0.3164 0.542969,1.0039 z"
                          id="path6266-3" />
                      <path
                          d="m 87.484375,469.80163 v -5.72656 h 0.902344 v 3.03906 l 1.050781,-1.46094 h 1.109375 l -1.164063,1.51563 1.246094,2.63281 h -0.96875 l -0.859375,-1.86328 -0.414062,0.53515 v 1.32813 z"
                          id="path6268-7" />
                    </g>
                    <g
                        transform="translate(44.002532,802.12692)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:8px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5693-4">
                      <path
                          d="m 59.913086,469.80163 v -4.75781 h -1.394531 v -0.96875 h 3.730468 v 0.96875 h -1.390625 v 4.75781 z"
                          id="path6271-5" />
                      <path
                          d="m 63.061523,466.91882 -0.816406,-0.17969 q 0.148438,-0.62891 0.488281,-0.90234 0.34375,-0.27735 0.984375,-0.27735 0.570313,0 0.871094,0.16016 0.300781,0.16015 0.429688,0.4375 0.128906,0.27344 0.128906,1 l -0.0078,1.28125 q 0,0.53906 0.04297,0.80469 0.04297,0.26171 0.160156,0.55859 h -0.890625 l -0.117187,-0.45313 q -0.230469,0.27344 -0.496094,0.41016 -0.261719,0.13672 -0.558594,0.13672 -0.496093,0 -0.8125,-0.33203 -0.316406,-0.33594 -0.316406,-0.89063 0,-0.35156 0.128906,-0.61328 0.128907,-0.26172 0.363282,-0.41797 0.234375,-0.15625 0.75,-0.27734 0.625,-0.14453 0.871093,-0.26953 0,-0.34375 -0.05078,-0.44922 -0.04687,-0.10938 -0.179687,-0.17578 -0.128907,-0.0703 -0.367188,-0.0703 -0.242187,0 -0.382812,0.10937 -0.136719,0.10938 -0.222657,0.41016 z m 1.203125,0.89062 q -0.171875,0.0703 -0.535156,0.16406 -0.417969,0.10938 -0.546875,0.24219 -0.128906,0.13281 -0.128906,0.34375 0,0.23828 0.140625,0.40235 0.144531,0.16015 0.359375,0.16015 0.191406,0 0.378906,-0.1289 0.1875,-0.13282 0.257813,-0.3125 0.07422,-0.17969 0.07422,-0.65235 v -0.21875 z"
                          id="path6273-2" />
                      <path
                          d="m 65.995117,469.80163 v -5.72656 h 0.902344 v 2.0625 q 0.207031,-0.28907 0.453125,-0.4336 0.25,-0.14453 0.535156,-0.14453 0.601563,0 1.015625,0.54297 0.417969,0.54297 0.417969,1.60156 0,1.05469 -0.425781,1.625 -0.425782,0.56641 -1,0.56641 -0.292969,0 -0.578125,-0.17969 -0.285157,-0.17969 -0.484375,-0.52344 v 0.60938 z m 0.894531,-2.16406 q 0,0.53515 0.101563,0.8164 0.101562,0.28125 0.289062,0.42969 0.1875,0.14453 0.394532,0.14453 0.296875,0 0.507812,-0.30859 0.210938,-0.3125 0.210938,-0.98438 0,-0.70703 -0.214844,-1.01953 -0.210938,-0.3164 -0.539063,-0.3164 -0.3125,0 -0.53125,0.30468 -0.21875,0.30469 -0.21875,0.9336 z"
                          id="path6275-5" />
                    </g>
                    <g
                        transform="translate(42.933196,772.91235)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5701-4">
                      <path
                          d="m 58.882812,466.01961 h -0.71289 l -1.103516,-1.45996 h 1.259766 z"
                          id="path6278-7" />
                    </g>
                    <g
                        transform="translate(73.366785,772.91235)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5709-4">
                      <path
                          d="m 56.834961,471.83993 h -1.123047 v -5.1709 q -0.629883,0.70801 -1.455078,1.04004 v -1.24512 q 0.46875,-0.19043 0.97168,-0.67871 0.502929,-0.49316 0.698242,-1.13281 h 0.908203 z"
                          id="path6281-4" />
                    </g>
                    <g
                        transform="translate(101.12753,772.86596)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5717-3">
                      <path
                          d="m 57.757812,470.56551 v 1.27442 H 53.8125 q 0.06348,-0.72266 0.385742,-1.37207 0.327149,-0.6543 1.264649,-1.71387 0.742187,-0.84473 0.913086,-1.14258 0.253906,-0.43457 0.253906,-0.87402 0,-0.46875 -0.209961,-0.70801 -0.209961,-0.23926 -0.551758,-0.23926 -0.74707,0 -0.805664,1.11817 l -1.118164,-0.13672 q 0.102539,-1.09375 0.605469,-1.60645 0.507812,-0.51269 1.347656,-0.51269 0.922851,0 1.391601,0.60058 0.46875,0.60059 0.46875,1.37696 0,0.43945 -0.12207,0.85449 -0.117187,0.41015 -0.366211,0.83008 -0.249023,0.41504 -0.830078,1.06445 -0.541992,0.61035 -0.688476,0.80566 -0.141602,0.19532 -0.229493,0.38086 z"
                          id="path6284-0" />
                    </g>
                    <g
                        transform="translate(129.04696,772.80493)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5725-7">
                      <path
                          d="m 53.915039,469.94051 1.088867,-0.16113 q 0.04395,0.50781 0.278321,0.77637 0.234375,0.26855 0.551757,0.26855 0.34668,0 0.585938,-0.31738 0.239258,-0.31738 0.239258,-0.87891 0,-0.52246 -0.229493,-0.82031 -0.229492,-0.29785 -0.55664,-0.29785 -0.214844,0 -0.512695,0.10254 l 0.12207,-1.11817 q 0.43457,0.01 0.688476,-0.23437 0.249024,-0.24414 0.249024,-0.68848 0,-0.37109 -0.180664,-0.58105 -0.180664,-0.20996 -0.463867,-0.20996 -0.283204,0 -0.493164,0.24414 -0.205079,0.23925 -0.244141,0.71289 l -1.040039,-0.21485 q 0.161133,-0.98144 0.629883,-1.42578 0.46875,-0.44433 1.18164,-0.44433 0.800782,0 1.269532,0.57129 0.473632,0.57128 0.473632,1.26464 0,0.46875 -0.214843,0.84473 -0.209961,0.37598 -0.634766,0.65918 0.493164,0.13184 0.800781,0.58106 0.3125,0.44921 0.3125,1.12304 0,0.98145 -0.585937,1.62598 -0.581055,0.63965 -1.386719,0.63965 -0.771484,0 -1.308594,-0.542 -0.532226,-0.54199 -0.620117,-1.47949 z"
                          id="path6287-8" />
                    </g>
                    <g
                        transform="translate(157.04452,772.86596)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5733-6">
                      <path
                          d="m 56.161133,471.83993 v -1.44043 h -2.402344 v -1.20117 l 2.543945,-4.5459 H 57.25 v 4.54101 h 0.727539 v 1.20606 H 57.25 v 1.44043 z m 0,-2.64649 v -2.44629 l -1.347656,2.44629 z"
                          id="path6290-8" />
                    </g>
                    <g
                        transform="translate(184.9664,772.74145)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5741-8">
                      <path
                          d="m 53.973633,469.99911 1.123047,-0.14161 q 0.04395,0.46875 0.288086,0.73731 0.24414,0.26855 0.537109,0.26855 0.34668,0 0.595703,-0.34179 0.249024,-0.34668 0.249024,-1.05957 0,-0.67383 -0.249024,-0.9961 -0.244141,-0.32226 -0.625,-0.32226 -0.483398,0 -0.869141,0.52246 l -0.913085,-0.16113 0.576171,-3.72559 h 2.973633 v 1.28418 h -2.11914 l -0.180664,1.21582 q 0.380859,-0.22949 0.771484,-0.22949 0.693359,0 1.176758,0.54687 0.610351,0.69824 0.610351,1.84082 0,0.94239 -0.522461,1.7334 -0.517578,0.79102 -1.484375,0.79102 -0.78125,0 -1.308593,-0.50782 -0.522461,-0.51269 -0.629883,-1.45507 z"
                          id="path6293-4" />
                    </g>
                    <g
                        transform="translate(212.99325,772.80493)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5749-3">
                      <path
                          d="m 57.767578,466.43465 -1.088867,0.14649 q -0.07813,-0.80078 -0.639649,-0.80078 -0.36621,0 -0.610351,0.40039 -0.239258,0.40039 -0.302734,1.61621 0.20996,-0.30274 0.46875,-0.4541 0.258789,-0.15137 0.571289,-0.15137 0.688476,0 1.201171,0.64453 0.512696,0.63965 0.512696,1.7041 0,1.13281 -0.541992,1.77735 -0.541993,0.64453 -1.342774,0.64453 -0.878906,0 -1.459961,-0.83496 -0.576172,-0.83985 -0.576172,-2.77832 0,-1.96778 0.600586,-2.83204 0.600586,-0.86425 1.542969,-0.86425 0.649414,0 1.09375,0.44433 0.449219,0.43946 0.571289,1.33789 z m -2.543945,2.99317 q 0,0.67871 0.249023,1.04004 0.253906,0.35644 0.576172,0.35644 0.3125,0 0.517578,-0.29785 0.209961,-0.29785 0.209961,-0.97656 0,-0.70313 -0.224609,-1.02539 -0.22461,-0.32227 -0.556641,-0.32227 -0.322265,0 -0.546875,0.30762 -0.224609,0.30762 -0.224609,0.91797 z"
                          id="path6296-1" />
                    </g>
                    <g
                        transform="translate(241.03476,772.80249)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5757-4">
                      <path
                          d="m 53.954102,466.05379 v -1.27441 h 3.847656 v 0.99609 q -0.473633,0.57129 -0.961914,1.62598 -0.483399,1.0498 -0.751953,2.25586 -0.263672,1.20117 -0.263672,2.18262 h -1.083985 q 0.03906,-1.52344 0.507813,-3.042 0.46875,-1.51855 1.264648,-2.74414 z"
                          id="path6299-9" />
                    </g>
                    <g
                        transform="translate(269.0372,772.80249)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5765-2">
                      <path
                          d="m 54.925781,467.97762 q -0.415039,-0.21484 -0.625,-0.58594 -0.209961,-0.37109 -0.209961,-0.89355 0,-0.84473 0.478516,-1.34277 0.478516,-0.50293 1.289062,-0.50293 0.859375,0 1.308594,0.53711 0.449219,0.53222 0.449219,1.29882 0,0.52247 -0.219727,0.90821 -0.214843,0.38086 -0.59082,0.58105 0.50293,0.24414 0.751953,0.68848 0.249024,0.43945 0.249024,1.08398 0,0.66407 -0.249024,1.17188 -0.24414,0.50781 -0.678711,0.77637 -0.43457,0.26855 -0.976562,0.26855 -0.84961,0 -1.40625,-0.58594 -0.551758,-0.59082 -0.551758,-1.58691 0,-0.64453 0.253906,-1.1084 0.253906,-0.46387 0.727539,-0.70801 z m 0.229492,-1.38183 q 0,0.41992 0.195313,0.64453 0.200195,0.22461 0.50293,0.22461 0.307617,0 0.507812,-0.22461 0.200195,-0.22461 0.200195,-0.64453 0,-0.40528 -0.200195,-0.62989 -0.195312,-0.22461 -0.493164,-0.22461 -0.3125,0 -0.512695,0.2295 -0.200196,0.22461 -0.200196,0.625 z m -0.102539,3.0664 q 0,0.57617 0.244141,0.88867 0.244141,0.3125 0.585937,0.3125 0.341797,0 0.57129,-0.29785 0.234375,-0.29785 0.234375,-0.89355 0,-0.5127 -0.239258,-0.81055 -0.234375,-0.29785 -0.581055,-0.29785 -0.341797,0 -0.581055,0.30273 -0.234375,0.29786 -0.234375,0.7959 z"
                          id="path6302-0" />
                    </g>
                    <g
                        transform="translate(297.08603,772.80249)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5773-6">
                      <path
                          d="m 53.978516,470.18465 1.088867,-0.14648 q 0.07813,0.7959 0.634765,0.7959 0.375977,0 0.615235,-0.39551 0.239258,-0.40039 0.307617,-1.61621 -0.209961,0.29785 -0.473633,0.44922 -0.263672,0.15136 -0.585937,0.15136 -0.668946,0 -1.186524,-0.63964 -0.512695,-0.63965 -0.512695,-1.69922 0,-1.13282 0.541992,-1.78223 0.541992,-0.64941 1.337891,-0.64941 0.888672,0 1.464843,0.83984 0.576172,0.83496 0.576172,2.77344 0,1.97265 -0.600586,2.83691 -0.600586,0.86426 -1.557617,0.86426 -0.664062,0 -1.098633,-0.43457 -0.429687,-0.43945 -0.551757,-1.34766 z m 2.548828,-2.99804 q 0,-0.67383 -0.253907,-1.03516 -0.253906,-0.36133 -0.576171,-0.36133 -0.3125,0 -0.522461,0.29785 -0.205078,0.29786 -0.205078,0.99121 0,0.69336 0.224609,1.01563 0.229492,0.32227 0.561523,0.32227 0.317383,0 0.541993,-0.30762 0.229492,-0.30762 0.229492,-0.92285 z"
                          id="path6305-8" />
                    </g>
                    <g
                        transform="translate(325.05185,772.80493)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5781-9">
                      <path
                          d="m 55.858398,464.65243 q 0.854493,0 1.381836,0.81543 0.527344,0.81054 0.527344,2.84179 0,2.02637 -0.527344,2.8418 -0.527343,0.81055 -1.376953,0.81055 -0.854492,0 -1.381836,-0.80567 -0.527343,-0.80566 -0.527343,-2.86133 0,-2.0166 0.527343,-2.82714 0.527344,-0.81543 1.376953,-0.81543 z m 0,1.13769 q -0.332031,0 -0.532226,0.43946 -0.195313,0.43945 -0.195313,2.08007 0,1.64063 0.195313,2.08008 0.200195,0.43457 0.532226,0.43457 0.336914,0 0.532227,-0.43945 0.195312,-0.43945 0.195312,-2.0752 0,-1.64062 -0.195312,-2.08007 -0.195313,-0.43946 -0.532227,-0.43946 z"
                          id="path6308-2" />
                    </g>
                    <g
                        transform="translate(353.02255,771.86743)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5789-6">
                      <path
                          d="m 54.793945,469.93075 v -1.37207 h 2.211914 v 1.37207 z"
                          id="path6311-6" />
                    </g>
                    <g
                        transform="translate(84.337977,800.55346)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5797-4">
                      <path
                          d="m 59.313477,473.81258 v -2.60742 q -0.229493,0.36133 -0.561524,0.55664 -0.332031,0.19531 -0.698242,0.19531 -0.712891,0 -1.230469,-0.71289 -0.512695,-0.71289 -0.512695,-2.05566 0,-1.26953 0.522461,-1.95801 0.527344,-0.69336 1.284179,-0.69336 0.405274,0 0.722657,0.21973 0.322265,0.21973 0.561523,0.66406 v -0.7666 h 1.035156 v 7.1582 z m 0.03906,-4.6289 q 0,-0.80567 -0.268555,-1.18653 -0.268554,-0.38574 -0.668945,-0.38574 -0.405273,0 -0.678711,0.39551 -0.273437,0.39062 -0.273437,1.25976 0,0.8545 0.263671,1.23047 0.268555,0.37598 0.649415,0.37598 0.385742,0 0.67871,-0.41992 0.297852,-0.41992 0.297852,-1.26953 z"
                          id="path6314-9" />
                    </g>
                    <g
                        transform="translate(112.24472,800.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5805-5">
                      <path
                          d="m 56.844727,471.83993 -1.347657,-5.18555 h 1.09375 l 0.795899,3.39844 0.732422,-3.39844 h 1.083984 l 0.708008,3.39844 0.815429,-3.39844 h 1.108399 l -1.367188,5.18555 h -1.079101 l -0.732422,-3.33496 -0.722656,3.33496 z"
                          id="path6317-0" />
                    </g>
                    <g
                        transform="translate(141.1412,800.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5813-4">
                      <path
                          d="m 58.447266,470.18954 1.118164,0.22949 q -0.22461,0.78125 -0.698243,1.16211 -0.473632,0.37597 -1.152343,0.37597 -0.942383,0 -1.455078,-0.62988 -0.605469,-0.73242 -0.605469,-2.05078 0,-1.29883 0.610351,-2.08008 0.517579,-0.65918 1.337891,-0.65918 0.913086,0 1.430664,0.67383 0.595703,0.77148 0.595703,2.27539 l -0.0049,0.15625 h -2.817382 q 0.0098,0.61524 0.273437,0.95215 0.268555,0.33691 0.644531,0.33691 0.541993,0 0.722657,-0.74218 z m 0.06348,-1.38672 q -0.01465,-0.60547 -0.258789,-0.90821 -0.244141,-0.30761 -0.581055,-0.30761 -0.356445,0 -0.600586,0.31738 -0.249023,0.32227 -0.24414,0.89844 z"
                          id="path6320-8" />
                    </g>
                    <g
                        transform="translate(167.38241,800.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5821-7">
                      <path
                          d="m 59.310547,471.83993 h -1.12793 v -5.18555 h 1.044922 v 0.7373 q 0.268555,-0.51757 0.478516,-0.68359 0.214843,-0.1709 0.493164,-0.1709 0.385742,0 0.737304,0.25879 l -0.351562,1.19629 q -0.27832,-0.22461 -0.527344,-0.22461 -0.234375,0 -0.415039,0.17578 -0.175781,0.1709 -0.253906,0.625 -0.07813,0.4541 -0.07813,1.66992 v 1.60157 z"
                          id="path6323-1" />
                    </g>
                    <g
                        transform="translate(196.46005,800.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5829-7">
                      <path
                          d="m 59.621094,466.65438 v 1.09375 h -0.766602 v 2.08984 q 0,0.67871 0.03418,0.78614 0.06836,0.19531 0.27832,0.19531 0.15625,0 0.449219,-0.13184 l 0.09766,1.06446 q -0.390625,0.20507 -0.883789,0.20507 -0.429687,0 -0.688476,-0.20507 -0.25879,-0.20508 -0.34668,-0.59082 -0.06836,-0.28321 -0.06836,-1.15235 v -2.26074 h -0.517578 v -1.09375 h 0.517578 v -1.03027 l 1.12793,-0.80078 v 1.83105 h 0.766602 z"
                          id="path6326-2" />
                    </g>
                    <g
                        transform="translate(224.84823,800.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5837-7">
                      <path
                          d="m 55.829102,466.65438 h 1.201171 l 1.010743,3.68164 0.996093,-3.68164 h 1.16211 l -1.499024,4.99023 -0.288086,0.97168 q -0.190429,0.54688 -0.380859,0.80079 -0.185547,0.2539 -0.478516,0.39062 -0.288086,0.13672 -0.71289,0.13672 -0.327149,0 -0.639649,-0.083 l -0.09766,-1.07422 q 0.263672,0.0635 0.473633,0.0635 0.322265,0 0.527344,-0.21484 0.209961,-0.21485 0.341796,-0.78125 l -1.61621,-5.2002 z"
                          id="path6329-2" />
                    </g>
                    <g
                        transform="translate(252.87997,800.79028)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5845-2">
                      <path
                          d="m 58.93457,471.83993 v -0.77637 q -0.234375,0.41992 -0.615234,0.65918 -0.380859,0.23437 -0.795899,0.23437 -0.419921,0 -0.751953,-0.21972 -0.332031,-0.21973 -0.498047,-0.625 -0.161132,-0.40528 -0.161132,-1.17676 v -3.28125 h 1.127929 v 2.38281 q 0,1.02051 0.04883,1.29883 0.05371,0.27344 0.229493,0.42481 0.175781,0.15136 0.424804,0.15136 0.283203,0 0.522461,-0.19531 0.239258,-0.2002 0.3125,-0.50781 0.07813,-0.3125 0.07813,-1.36719 v -2.1875 h 1.123047 v 5.18555 h -1.044922 z"
                          id="path6332-6" />
                    </g>
                    <g
                        transform="translate(281.22909,800.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5853-1">
                      <path
                          d="m 57.114258,465.95125 v -1.26953 h 1.127929 v 1.26953 z m 0,5.88868 v -5.18555 h 1.127929 v 5.18555 z"
                          id="path6335-0" />
                    </g>
                    <g
                        transform="translate(308.23983,800.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5861-6">
                      <path
                          d="m 56.46875,469.17391 q 0,-0.76172 0.302734,-1.38672 0.302735,-0.625 0.791016,-0.9375 0.488281,-0.3125 1.098633,-0.3125 1.02539,0 1.611328,0.80567 0.585937,0.80078 0.585937,1.875 0,0.80078 -0.307617,1.44531 -0.302734,0.64453 -0.800781,0.97168 -0.493164,0.32226 -1.083984,0.32226 -0.947266,0 -1.572266,-0.72265 -0.625,-0.72266 -0.625,-2.06055 z m 1.152344,0.0732 q 0,0.78614 0.307617,1.19141 0.307617,0.40039 0.742187,0.40039 0.424805,0 0.727539,-0.40527 0.302735,-0.40528 0.302735,-1.19629 0,-0.77149 -0.307617,-1.17676 -0.307618,-0.40527 -0.737305,-0.40527 -0.424805,0 -0.732422,0.40527 -0.302734,0.40527 -0.302734,1.18652 z"
                          id="path6338-1" />
                    </g>
                    <g
                        transform="translate(335.55087,800.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5869-5">
                      <path
                          d="m 57.289062,466.65438 h 1.049805 v 0.76172 q 0.214844,-0.41016 0.566406,-0.64453 0.351563,-0.23438 0.756836,-0.23438 0.727539,0 1.25,0.69336 0.527344,0.69336 0.527344,1.96778 0,1.33789 -0.527344,2.05078 -0.527343,0.708 -1.254882,0.708 -0.336915,0 -0.629883,-0.16113 -0.288086,-0.16601 -0.610352,-0.5957 v 2.6123 h -1.12793 z m 1.113282,2.50488 q 0,0.87891 0.283203,1.29395 0.288086,0.41504 0.693359,0.41504 0.385742,0 0.649414,-0.38086 0.263672,-0.38574 0.263672,-1.25489 0,-0.82519 -0.273437,-1.21582 -0.268555,-0.3955 -0.65918,-0.3955 -0.410156,0 -0.683594,0.38574 -0.273437,0.38086 -0.273437,1.15234 z"
                          id="path6341-9" />
                    </g>
                    <g
                        transform="translate(365.0289,799.84301)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5877-4">
                      <path
                          d="m 56.879883,473.85653 v -9.17481 h 1.992187 v 1.07911 h -0.922851 v 7.0166 h 0.922851 v 1.0791 z"
                          id="path6344-9" />
                    </g>
                    <g
                        transform="translate(392.47421,799.84301)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5885-0">
                      <path
                          d="m 59.427734,464.68172 v 9.17481 h -1.992187 v -1.0791 h 0.922851 v -7.02637 h -0.922851 v -1.06934 z"
                          id="path6347-9" />
                    </g>
                    <g
                        transform="translate(426.27255,800.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5893-1">
                      <path
                          d="m 58.484375,464.55965 h 0.830078 l 1.469727,7.40235 h -0.844727 z"
                          id="path6350-7" />
                    </g>
                    <g
                        transform="translate(381.02255,772.80249)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5901-7">
                      <path
                          d="m 53.836914,467.85555 v -1.25976 h 4.106445 v 1.25976 z m 0,2.16797 v -1.26465 h 4.106445 v 1.26465 z"
                          id="path6353-1" />
                    </g>
                    <g
                        transform="translate(403.80526,774.12692)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:8px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5909-1">
                      <path
                          d="m 58.34375,464.07507 h 1.878906 q 0.769531,0 1.082031,0.14062 0.3125,0.14063 0.527344,0.4961 0.214844,0.35546 0.214844,0.80468 0,0.41407 -0.183594,0.75 -0.183594,0.33203 -0.476562,0.49219 0.417968,0.14844 0.652343,0.50781 0.238282,0.35938 0.238282,0.875 0,0.625 -0.300782,1.0586 -0.300781,0.42968 -0.710937,0.53125 -0.285156,0.0703 -1.324219,0.0703 H 58.34375 v -5.72656 z m 0.945312,0.95312 v 1.32422 h 0.625 q 0.5625,0 0.695313,-0.0195 0.242187,-0.0391 0.378906,-0.20313 0.136719,-0.16796 0.136719,-0.45312 0,-0.25391 -0.113281,-0.41016 -0.109375,-0.16015 -0.269532,-0.19922 -0.15625,-0.0391 -0.90625,-0.0391 h -0.546875 z m 0,2.27735 v 1.53125 h 0.878907 q 0.578125,0 0.742187,-0.0586 0.164063,-0.0625 0.273438,-0.23828 0.113281,-0.17969 0.113281,-0.45312 0,-0.28125 -0.121094,-0.46094 -0.117187,-0.1836 -0.316406,-0.25 -0.195313,-0.0703 -0.804688,-0.0703 h -0.765625 z"
                          id="path6356-5" />
                      <path
                          d="m 63.746094,466.91882 -0.816407,-0.17969 q 0.148438,-0.62891 0.488282,-0.90234 0.34375,-0.27735 0.984375,-0.27735 0.570312,0 0.871093,0.16016 0.300782,0.16015 0.429688,0.4375 0.128906,0.27344 0.128906,1 l -0.0078,1.28125 q 0,0.53906 0.04297,0.80469 0.04297,0.26171 0.160157,0.55859 h -0.890625 l -0.117188,-0.45313 q -0.230469,0.27344 -0.496094,0.41016 -0.261718,0.13672 -0.558593,0.13672 -0.496094,0 -0.8125,-0.33203 -0.316407,-0.33594 -0.316407,-0.89063 0,-0.35156 0.128907,-0.61328 0.128906,-0.26172 0.363281,-0.41797 0.234375,-0.15625 0.75,-0.27734 0.625,-0.14453 0.871094,-0.26953 0,-0.34375 -0.05078,-0.44922 -0.04687,-0.10938 -0.179687,-0.17578 -0.128906,-0.0703 -0.367188,-0.0703 -0.242187,0 -0.382812,0.10937 -0.136719,0.10938 -0.222656,0.41016 z m 1.203125,0.89062 q -0.171875,0.0703 -0.535157,0.16406 -0.417968,0.10938 -0.546875,0.24219 -0.128906,0.13281 -0.128906,0.34375 0,0.23828 0.140625,0.40235 0.144531,0.16015 0.359375,0.16015 0.191406,0 0.378906,-0.1289 0.1875,-0.13282 0.257813,-0.3125 0.07422,-0.17969 0.07422,-0.65235 z"
                          id="path6358-9" />
                      <path
                          d="m 69.679687,466.87975 -0.886718,0.19532 q -0.09766,-0.65235 -0.613282,-0.65235 -0.332031,0 -0.535156,0.28125 -0.203125,0.28125 -0.203125,0.94922 0,0.73828 0.203125,1.04297 0.203125,0.30469 0.542969,0.30469 0.253906,0 0.417969,-0.17188 0.164062,-0.17578 0.234375,-0.61718 l 0.886718,0.18359 q -0.273437,1.5 -1.574218,1.5 -0.832032,0 -1.234375,-0.63281 -0.402344,-0.63282 -0.402344,-1.52344 0,-1.06641 0.453125,-1.62109 0.457031,-0.5586 1.195312,-0.5586 0.597657,0 0.972657,0.31641 0.378906,0.3164 0.542968,1.0039 z"
                          id="path6360-7" />
                      <path
                          d="m 70.324219,469.80163 v -5.72656 h 0.902343 v 3.03906 l 1.050782,-1.46094 h 1.109375 l -1.164063,1.51563 1.246094,2.63281 H 72.5 l -0.859375,-1.86328 -0.414063,0.53515 v 1.32813 z"
                          id="path6362-7" />
                      <path
                          d="m 73.695312,468.61804 0.902344,-0.16797 q 0.117188,0.65234 0.726563,0.65234 0.324218,0 0.484375,-0.125 0.160156,-0.125 0.160156,-0.32422 0,-0.13672 -0.07031,-0.21484 -0.07422,-0.0781 -0.292968,-0.13672 -1.109375,-0.29297 -1.410157,-0.55859 -0.375,-0.33204 -0.375,-0.91016 0,-0.57813 0.367188,-0.92578 0.367187,-0.34766 1.066406,-0.34766 0.667969,0 1.015625,0.26172 0.347656,0.25781 0.488281,0.83594 l -0.847656,0.1914 q -0.113281,-0.5 -0.640625,-0.5 -0.332031,0 -0.472656,0.0977 -0.140625,0.0937 -0.140625,0.24609 0,0.13672 0.128906,0.22657 0.128906,0.0937 0.800781,0.28125 0.753907,0.21093 1.023438,0.51172 0.265625,0.30078 0.265625,0.80078 0,0.60156 -0.414063,0.99218 -0.410156,0.39063 -1.136718,0.39063 -0.660157,0 -1.078125,-0.32422 -0.417969,-0.32812 -0.550782,-0.95312 z"
                          id="path6364-6" />
                      <path
                          d="m 77.640625,465.65319 h 0.839844 v 0.60938 q 0.171875,-0.32813 0.453125,-0.51563 0.28125,-0.1875 0.605468,-0.1875 0.582032,0 1,0.55469 0.421875,0.55469 0.421875,1.57422 0,1.07031 -0.421875,1.64062 -0.421875,0.56641 -1.003906,0.56641 -0.269531,0 -0.503906,-0.12891 -0.230469,-0.13281 -0.488281,-0.47656 v 2.08984 h -0.902344 z m 0.890625,2.00391 q 0,0.70312 0.226562,1.03515 0.230469,0.33204 0.554688,0.33204 0.308594,0 0.519531,-0.30469 0.210938,-0.3086 0.210938,-1.00391 0,-0.66015 -0.21875,-0.97265 -0.214844,-0.31641 -0.527344,-0.31641 -0.328125,0 -0.546875,0.30859 -0.21875,0.30469 -0.21875,0.92188 z"
                          id="path6366-7" />
                      <path
                          d="m 82.355469,466.91882 -0.816407,-0.17969 q 0.148438,-0.62891 0.488282,-0.90234 0.34375,-0.27735 0.984375,-0.27735 0.570312,0 0.871093,0.16016 0.300782,0.16015 0.429688,0.4375 0.128906,0.27344 0.128906,1 l -0.0078,1.28125 q 0,0.53906 0.04297,0.80469 0.04297,0.26171 0.160157,0.55859 H 83.746108 L 83.62892,469.3485 q -0.230469,0.27344 -0.496094,0.41016 -0.261718,0.13672 -0.558593,0.13672 -0.496094,0 -0.8125,-0.33203 -0.316407,-0.33594 -0.316407,-0.89063 0,-0.35156 0.128907,-0.61328 0.128906,-0.26172 0.363281,-0.41797 0.234375,-0.15625 0.75,-0.27734 0.625,-0.14453 0.871094,-0.26953 0,-0.34375 -0.05078,-0.44922 -0.04687,-0.10938 -0.179687,-0.17578 -0.128906,-0.0703 -0.367188,-0.0703 -0.242187,0 -0.382812,0.10937 -0.136719,0.10938 -0.222656,0.41016 z m 1.203125,0.89062 q -0.171875,0.0703 -0.535157,0.16406 -0.417968,0.10938 -0.546875,0.24219 -0.128906,0.13281 -0.128906,0.34375 0,0.23828 0.140625,0.40235 0.144531,0.16015 0.359375,0.16015 0.191406,0 0.378906,-0.1289 0.1875,-0.13282 0.257813,-0.3125 0.07422,-0.17969 0.07422,-0.65235 z"
                          id="path6368-3" />
                      <path
                          d="m 88.289062,466.87975 -0.886718,0.19532 q -0.09766,-0.65235 -0.613282,-0.65235 -0.332031,0 -0.535156,0.28125 -0.203125,0.28125 -0.203125,0.94922 0,0.73828 0.203125,1.04297 0.203125,0.30469 0.542969,0.30469 0.253906,0 0.417969,-0.17188 0.164062,-0.17578 0.234375,-0.61718 l 0.886718,0.18359 q -0.273437,1.5 -1.574218,1.5 -0.832032,0 -1.234375,-0.63281 -0.402344,-0.63282 -0.402344,-1.52344 0,-1.06641 0.453125,-1.62109 0.457031,-0.5586 1.195312,-0.5586 0.597657,0 0.972657,0.31641 0.378906,0.3164 0.542968,1.0039 z"
                          id="path6370-6" />
                      <path
                          d="m 90.9375,468.48132 0.894531,0.18359 q -0.179687,0.625 -0.558594,0.92969 -0.378906,0.30078 -0.921875,0.30078 -0.753906,0 -1.164062,-0.50391 -0.484375,-0.58593 -0.484375,-1.64062 0,-1.03906 0.488281,-1.66406 0.414063,-0.52735 1.070313,-0.52735 0.730468,0 1.144531,0.53906 0.476562,0.61719 0.476562,1.82032 l -0.0039,0.125 h -2.253906 q 0.0078,0.49218 0.21875,0.76172 0.214844,0.26953 0.515625,0.26953 0.433594,0 0.578125,-0.59375 z m 0.05078,-1.10938 q -0.01172,-0.48437 -0.207031,-0.72656 -0.195313,-0.24609 -0.464844,-0.24609 -0.285156,0 -0.480469,0.2539 -0.199218,0.25781 -0.195312,0.71875 z"
                          id="path6372-5" />
                    </g>
                    <g
                        transform="translate(409.7662,830.12692)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:8px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5917-6">
                      <path
                          d="m 57.446289,469.80163 v -5.72656 h 3.484375 v 0.96875 h -2.539062 v 1.26953 h 2.359375 v 0.96484 h -2.359375 v 1.5586 h 2.625 v 0.96484 z"
                          id="path6375-3" />
                      <path
                          d="m 64.907227,469.80163 h -0.902344 v -2.11719 q 0,-0.63672 -0.05078,-0.84765 -0.05078,-0.21094 -0.191407,-0.32422 -0.136718,-0.11328 -0.3125,-0.11328 -0.226562,0 -0.410156,0.14843 -0.183594,0.14453 -0.257812,0.40235 -0.07422,0.25781 -0.07422,0.97265 v 1.87891 h -0.902344 v -4.14844 h 0.835938 v 0.60938 q 0.222656,-0.35157 0.5,-0.52735 0.28125,-0.17578 0.621093,-0.17578 0.394532,0 0.664063,0.20703 0.273437,0.20313 0.375,0.52735 0.105469,0.32031 0.105469,0.92968 z"
                          id="path6377-9" />
                      <path
                          d="m 67.383789,465.65319 v 0.875 h -0.613281 v 1.67188 q 0,0.54297 0.02734,0.6289 0.05469,0.15625 0.222656,0.15625 0.125,0 0.359375,-0.10547 l 0.07813,0.85157 q -0.3125,0.16406 -0.707031,0.16406 -0.34375,0 -0.550782,-0.16406 -0.207031,-0.16407 -0.277343,-0.47266 -0.05469,-0.22656 -0.05469,-0.92187 v -1.8086 h -0.414062 v -0.875 h 0.414062 v -0.82422 l 0.902344,-0.64062 v 1.46484 z"
                          id="path6379-4" />
                      <path
                          d="m 69.989258,468.48132 0.894531,0.18359 q -0.179687,0.625 -0.558594,0.92969 -0.378906,0.30078 -0.921875,0.30078 -0.753906,0 -1.164062,-0.50391 -0.484375,-0.58593 -0.484375,-1.64062 0,-1.03906 0.488281,-1.66406 0.414063,-0.52735 1.070313,-0.52735 0.730468,0 1.144531,0.53906 0.476562,0.61719 0.476562,1.82032 l -0.0039,0.125 h -2.253906 q 0.0078,0.49218 0.21875,0.76172 0.214844,0.26953 0.515625,0.26953 0.433594,0 0.578125,-0.59375 z m 0.05078,-1.10938 q -0.01172,-0.48437 -0.207031,-0.72656 -0.195313,-0.24609 -0.464844,-0.24609 -0.285156,0 -0.480469,0.2539 -0.199218,0.25781 -0.195312,0.71875 z"
                          id="path6381-8" />
                      <path
                          d="m 72.520508,469.80163 h -0.902344 v -4.14844 h 0.835938 v 0.58985 q 0.214843,-0.41407 0.382812,-0.54688 0.171875,-0.13672 0.394531,-0.13672 0.308594,0 0.589844,0.20703 l -0.28125,0.95703 q -0.222656,-0.17968 -0.421875,-0.17968 -0.1875,0 -0.332031,0.14062 -0.140625,0.13672 -0.203125,0.5 -0.0625,0.36328 -0.0625,1.33594 z"
                          id="path6383-1" />
                    </g>
                    <g
                        transform="translate(370.47079,829.05297)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5925-2">
                      <path
                          d="m 59.039062,467.22567 -0.20996,-1.33301 v -1.21094 h 1.225585 v 1.21094 l -0.185546,1.33301 z"
                          id="path6386-9" />
                    </g>
                    <g
                        transform="translate(342.35067,829.05297)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5933-3">
                      <path
                          d="m 59.041016,468.02645 v -1.37207 h 1.123046 v 1.37207 z m 0,2.44141 h 1.123046 v 0.98144 q 0,0.83496 -0.195312,1.24024 -0.239258,0.50293 -0.800781,0.74707 l -0.219727,-0.56641 q 0.332031,-0.13672 0.478516,-0.37598 0.146484,-0.23437 0.15625,-0.65429 h -0.541992 z"
                          id="path6389-9" />
                    </g>
                    <g
                        transform="translate(313.30331,829.05297)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5941-0">
                      <path
                          d="m 59.873047,471.83993 v -7.15821 h 1.12793 v 7.15821 z"
                          id="path6393-8" />
                    </g>
                    <g
                        transform="translate(285.76913,828.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5949-8">
                      <path
                          d="m 58.100586,471.83993 v -7.15821 h 1.12793 v 3.79883 l 1.313476,-1.82617 h 1.386719 l -1.455078,1.89453 1.557617,3.29102 h -1.210938 l -1.074218,-2.3291 -0.517578,0.66894 v 1.66016 z"
                          id="path6396-5" />
                    </g>
                    <g
                        transform="translate(259.31503,828.79028)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5957-0">
                      <path
                          d="m 58.272461,465.95125 v -1.26953 h 1.12793 v 1.26953 z m 1.12793,0.70313 v 5.02441 q 0,1.05957 -0.117188,1.4502 -0.117187,0.39062 -0.419922,0.60059 -0.302734,0.21484 -0.74707,0.21484 -0.336914,0 -0.78125,-0.14649 l 0.195312,-1.17187 q 0.161133,0.0439 0.278321,0.0439 0.292968,0 0.405273,-0.23437 0.05859,-0.12695 0.05859,-0.83496 v -4.94629 h 1.12793 z"
                          id="path6399-9" />
                    </g>
                    <g
                        transform="translate(231.26669,828.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5965-6">
                      <path
                          d="m 57.865234,464.68172 v 2.63184 q 0.268555,-0.39063 0.590821,-0.58106 0.327148,-0.19531 0.708007,-0.19531 0.507813,0 0.84961,0.26856 0.341797,0.26855 0.488281,0.76172 0.107422,0.36132 0.107422,1.23046 v 3.042 h -1.123047 v -2.73926 q 0,-0.95215 -0.12207,-1.19141 -0.170899,-0.32226 -0.581055,-0.32226 -0.43457,0 -0.678711,0.35156 -0.239258,0.34668 -0.239258,1.30371 v 2.59766 h -1.127929 v -7.15821 z"
                          id="path6402-3" />
                    </g>
                    <g
                        transform="translate(203.30819,828.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5973-8">
                      <path
                          d="m 56.625,472.18172 1.289062,0.19043 q 0.0293,0.28321 0.175782,0.40039 0.151367,0.12207 0.473633,0.12207 0.371093,0 0.600585,-0.12207 0.161133,-0.0879 0.249024,-0.29296 0.08789,-0.20508 0.08789,-0.72266 v -0.75684 q -0.253907,0.41992 -0.57129,0.62989 -0.317382,0.20996 -0.703125,0.20996 -0.708007,0 -1.191406,-0.63965 -0.55664,-0.73242 -0.55664,-1.98242 0,-1.32813 0.522461,-2.00196 0.527343,-0.67871 1.274414,-0.67871 0.395507,0 0.717773,0.20996 0.327148,0.20996 0.581055,0.63477 v -0.72754 h 1.054687 v 4.65332 q 0,1.11816 -0.205078,1.62109 -0.205078,0.50293 -0.634766,0.75684 -0.424804,0.25879 -1.18164,0.25879 -0.698242,0 -1.118164,-0.18555 -0.419922,-0.18554 -0.644531,-0.55664 Q 56.625,472.83602 56.625,472.35262 Z m 1.005859,-3.04199 q 0,0.83008 0.263672,1.21094 0.268555,0.38086 0.644531,0.38086 0.405274,0 0.69336,-0.38574 0.288086,-0.38575 0.288086,-1.17188 0,-0.81055 -0.278321,-1.19629 -0.273437,-0.39062 -0.67871,-0.39062 -0.400391,0 -0.668946,0.38086 -0.263672,0.38086 -0.263672,1.17187 z"
                          id="path6405-5" />
                    </g>
                    <g
                        transform="translate(175.53769,828.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5981-6">
                      <path
                          d="m 56.987305,466.65438 h 0.625 v -0.39063 q 0,-0.708 0.131836,-1.02539 0.136718,-0.31738 0.43457,-0.49804 0.302734,-0.18067 0.742187,-0.18067 0.478516,0 0.9375,0.17578 l -0.146484,0.95704 q -0.273437,-0.0781 -0.522461,-0.0781 -0.239258,0 -0.34668,0.13672 -0.107421,0.13672 -0.107421,0.53711 v 0.36621 h 0.839843 v 1.0791 h -0.839843 v 4.10645 h -1.123047 v -4.10645 h -0.625 v -1.0791 z"
                          id="path6408-1" />
                    </g>
                    <g
                        transform="translate(147.16171,828.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5989-1">
                      <path
                          d="m 60.633789,471.83993 h -1.049805 v -0.76172 q -0.258789,0.43945 -0.610351,0.65918 -0.351563,0.21972 -0.722656,0.21972 -0.712891,0 -1.245118,-0.708 -0.527343,-0.71289 -0.527343,-2.03125 0,-1.32813 0.517578,-2.00196 0.517578,-0.67871 1.274414,-0.67871 0.356445,0 0.664062,0.18067 0.3125,0.18066 0.571289,0.54199 v -2.57813 h 1.12793 z m -3.00293,-2.70508 q 0,0.70312 0.117188,1.0498 0.12207,0.3418 0.341797,0.51758 0.224609,0.1709 0.502929,0.1709 0.371094,0 0.644532,-0.40039 0.273437,-0.40039 0.273437,-1.20606 0,-0.89355 -0.268555,-1.28418 -0.263671,-0.3955 -0.673828,-0.3955 -0.390625,0 -0.664062,0.38574 -0.273438,0.38574 -0.273438,1.16211 z"
                          id="path6411-5" />
                    </g>
                    <g
                        transform="translate(119.10263,828.84887)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot5997-9">
                      <path
                          d="m 56.758789,470.36043 1.12793,-0.20996 q 0.146484,0.81543 0.908203,0.81543 0.405273,0 0.605469,-0.15625 0.200195,-0.15625 0.200195,-0.40527 0,-0.1709 -0.08789,-0.26855 -0.09277,-0.0977 -0.366211,-0.1709 -1.386718,-0.36621 -1.762695,-0.69825 -0.46875,-0.41503 -0.46875,-1.13769 0,-0.72266 0.458984,-1.15723 0.458985,-0.43457 1.333008,-0.43457 0.834961,0 1.269531,0.32715 0.434571,0.32227 0.610352,1.04492 l -1.05957,0.23926 q -0.141602,-0.625 -0.800782,-0.625 -0.415039,0 -0.59082,0.12207 -0.175781,0.11719 -0.175781,0.30762 0,0.1709 0.161133,0.2832 0.161133,0.11719 1.000976,0.35156 0.942383,0.26368 1.279297,0.63965 0.332031,0.37598 0.332031,1.00098 0,0.75195 -0.517578,1.24023 -0.512695,0.48828 -1.420898,0.48828 -0.825195,0 -1.347656,-0.40527 -0.522461,-0.41016 -0.688478,-1.19141 z"
                          id="path6414-8" />
                    </g>
                    <g
                        transform="translate(91.472254,828.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6005-4">
                      <path
                          d="m 57.609375,468.23641 -1.020508,-0.22461 q 0.185547,-0.78613 0.610352,-1.12793 0.429687,-0.34668 1.230468,-0.34668 0.712891,0 1.088868,0.2002 0.375976,0.20019 0.537109,0.54687 0.161133,0.3418 0.161133,1.25 l -0.0098,1.60157 q 0,0.67382 0.05371,1.00585 0.05371,0.32715 0.200195,0.69825 h -1.113281 l -0.146484,-0.56641 q -0.288086,0.3418 -0.620117,0.5127 -0.327149,0.17089 -0.698243,0.17089 -0.620117,0 -1.015625,-0.41503 -0.395507,-0.41993 -0.395507,-1.11329 0,-0.43945 0.161132,-0.7666 0.161133,-0.32715 0.454102,-0.52246 0.292969,-0.19531 0.9375,-0.34668 0.78125,-0.18066 1.088867,-0.33691 0,-0.42969 -0.06348,-0.56153 -0.05859,-0.13671 -0.22461,-0.21972 -0.161133,-0.0879 -0.458984,-0.0879 -0.302734,0 -0.478516,0.13672 -0.170898,0.13671 -0.27832,0.51269 z m 1.503906,1.11328 q -0.214844,0.0879 -0.668945,0.20508 -0.522461,0.13672 -0.683594,0.30273 -0.161133,0.16602 -0.161133,0.42969 0,0.29785 0.175782,0.50293 0.180664,0.2002 0.449218,0.2002 0.239258,0 0.473633,-0.16114 0.234375,-0.16601 0.322266,-0.39062 0.09277,-0.22461 0.09277,-0.81543 v -0.27344 z"
                          id="path6417-8" />
                    </g>
                    <g
                        transform="translate(50.600188,858.17184)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:8px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6013-1">
                      <path
                          d="m 60.171875,467.93835 0.925781,-0.10938 q 0.15625,1.09766 1.023438,1.09766 0.429687,0 0.675781,-0.22266 0.246094,-0.22656 0.246094,-0.55859 0,-0.19531 -0.08594,-0.33203 -0.08594,-0.13672 -0.261719,-0.22266 -0.175781,-0.0898 -0.851562,-0.29687 -0.605469,-0.1836 -0.886719,-0.39844 -0.28125,-0.21484 -0.449219,-0.5625 -0.164062,-0.35156 -0.164062,-0.75391 0,-0.46875 0.210937,-0.84375 0.214844,-0.375 0.589844,-0.5664 0.375,-0.19141 0.925781,-0.19141 0.828125,0 1.292969,0.44922 0.464844,0.44922 0.492188,1.28516 l -0.949219,0.0508 q -0.0625,-0.46094 -0.269531,-0.64453 -0.207032,-0.1836 -0.589844,-0.1836 -0.382813,0 -0.589844,0.16016 -0.207031,0.16015 -0.207031,0.39844 0,0.23437 0.1875,0.39453 0.1875,0.16015 0.863281,0.35156 0.714844,0.20703 1.03125,0.4375 0.320313,0.22656 0.488281,0.58984 0.167969,0.35938 0.167969,0.875 0,0.7461 -0.460937,1.25391 -0.457032,0.50781 -1.433594,0.50781 -1.726563,0 -1.921875,-1.96484 z"
                          id="path6420-0" />
                      <path
                          d="m 65.679687,464.07507 v 2.10547 q 0.214844,-0.3125 0.472657,-0.46485 0.261718,-0.15625 0.566406,-0.15625 0.40625,0 0.679687,0.21485 0.273438,0.21484 0.390625,0.60937 0.08594,0.28906 0.08594,0.98438 v 2.43359 h -0.898438 v -2.19141 q 0,-0.76172 -0.09766,-0.95312 -0.136719,-0.25781 -0.464844,-0.25781 -0.347656,0 -0.542968,0.28125 -0.191407,0.27734 -0.191407,1.04296 v 2.07813 h -0.902343 v -5.72656 h 0.902343 z"
                          id="path6422-3" />
                      <path
                          d="m 68.78125,465.09069 v -1.01562 h 0.902344 v 1.01562 z m 0,4.71094 v -4.14844 h 0.902344 v 4.14844 z"
                          id="path6424-0" />
                      <path
                          d="m 70.214844,465.65319 h 0.5 v -0.3125 q 0,-0.5664 0.105468,-0.82031 0.109375,-0.25391 0.347657,-0.39844 0.242187,-0.14453 0.59375,-0.14453 0.382812,0 0.75,0.14063 l -0.117188,0.76562 q -0.21875,-0.0625 -0.417969,-0.0625 -0.191406,0 -0.277343,0.10938 -0.08594,0.10937 -0.08594,0.42968 v 0.29297 h 0.671875 v 0.86328 h -0.671875 v 3.28516 h -0.898437 v -3.28516 h -0.5 v -0.86328 z"
                          id="path6426-4" />
                      <path
                          d="m 74.351562,465.65319 v 0.875 h -0.613281 v 1.67188 q 0,0.54297 0.02734,0.6289 0.05469,0.15625 0.222656,0.15625 0.125,0 0.359375,-0.10547 l 0.07813,0.85157 q -0.3125,0.16406 -0.707031,0.16406 -0.34375,0 -0.550781,-0.16406 -0.207032,-0.16407 -0.277344,-0.47266 -0.05469,-0.22656 -0.05469,-0.92187 v -1.8086 h -0.414062 v -0.875 h 0.414062 v -0.82422 l 0.902344,-0.64062 v 1.46484 z"
                          id="path6428-4" />
                    </g>
                    <g
                        transform="translate(104.68173,856.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6021-4">
                      <path
                          d="m 56.333008,471.83993 v -1.06934 l 1.596679,-2.23144 q 0.390625,-0.54688 0.576172,-0.77637 -0.195312,0.0146 -0.517578,0.0195 l -1.499023,0.01 v -1.1377 h 3.515625 v 0.97168 l -1.625977,2.28516 -0.571289,0.75683 q 0.46875,-0.0342 0.581055,-0.0342 h 1.743164 v 1.20606 h -3.798828 z"
                          id="path6431-4" />
                    </g>
                    <g
                        transform="translate(132.84823,856.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6029-7">
                      <path
                          d="m 55.824219,471.83993 1.533203,-2.6709 -1.469727,-2.51465 h 1.376953 l 0.751954,1.42578 0.791015,-1.42578 h 1.31836 l -1.44043,2.45605 1.577148,2.7295 h -1.381836 l -0.864257,-1.60645 -0.878907,1.60645 z"
                          id="path6434-6" />
                    </g>
                    <g
                        transform="translate(159.87606,856.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6037-3">
                      <path
                          d="m 61.066406,468.18758 -1.108398,0.24414 q -0.122071,-0.81543 -0.766602,-0.81543 -0.415039,0 -0.668945,0.35157 -0.253906,0.35156 -0.253906,1.18652 0,0.92285 0.253906,1.30371 0.253906,0.38086 0.678711,0.38086 0.317383,0 0.522461,-0.21484 0.205078,-0.21973 0.292969,-0.77149 l 1.108398,0.22949 q -0.341797,1.875 -1.967773,1.875 -1.04004,0 -1.542969,-0.79101 -0.50293,-0.79102 -0.50293,-1.9043 0,-1.33301 0.566406,-2.02637 0.571289,-0.69824 1.494141,-0.69824 0.74707,0 1.21582,0.39551 0.473633,0.39551 0.678711,1.25488 z"
                          id="path6437-1" />
                    </g>
                    <g
                        transform="translate(189.03817,856.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6045-7">
                      <path
                          d="m 57.335937,471.83993 -1.713867,-5.18555 h 1.181641 l 0.800781,2.64648 0.229492,0.88379 0.239258,-0.88379 0.810547,-2.64648 h 1.152344 l -1.689453,5.18555 z"
                          id="path6440-5" />
                    </g>
                    <g
                        transform="translate(215.95614,856.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6053-9">
                      <path
                          d="m 56.885742,471.83993 v -7.15821 h 1.12793 v 2.57813 q 0.258789,-0.36133 0.566406,-0.54199 0.3125,-0.18067 0.668945,-0.18067 0.751954,0 1.269532,0.67871 0.522461,0.67871 0.522461,2.00196 0,1.31836 -0.532227,2.03125 -0.532227,0.708 -1.25,0.708 -0.366211,0 -0.722656,-0.22461 -0.356446,-0.2246 -0.605469,-0.65429 v 0.76172 z m 1.118164,-2.70508 q 0,0.66894 0.126953,1.02051 0.126953,0.35156 0.361328,0.53711 0.234375,0.18066 0.493165,0.18066 0.371093,0 0.634765,-0.38574 0.263672,-0.39063 0.263672,-1.23047 0,-0.88379 -0.268555,-1.27442 -0.263672,-0.3955 -0.673828,-0.3955 -0.390625,0 -0.664062,0.38086 -0.273438,0.38086 -0.273438,1.16699 z"
                          id="path6443-6" />
                    </g>
                    <g
                        transform="translate(244.66464,856.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6061-2">
                      <path
                          d="m 60.205078,471.83993 h -1.12793 v -2.64649 q 0,-0.7959 -0.06348,-1.05957 -0.06348,-0.26367 -0.239258,-0.40527 -0.170898,-0.1416 -0.390625,-0.1416 -0.283203,0 -0.512695,0.18554 -0.229492,0.18067 -0.322266,0.50293 -0.09277,0.32227 -0.09277,1.21582 v 2.34864 h -1.12793 v -5.18555 h 1.044922 v 0.76172 q 0.27832,-0.43945 0.625,-0.65918 0.351562,-0.21973 0.776367,-0.21973 0.493164,0 0.830078,0.25879 0.341797,0.25391 0.46875,0.65918 0.131836,0.40039 0.131836,1.16211 z"
                          id="path6446-1" />
                    </g>
                    <g
                        transform="translate(271.47567,856.85131)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6069-7">
                      <path
                          d="m 56.299805,466.65438 h 1.035156 v 0.70801 q 0.27832,-0.41504 0.610351,-0.62012 0.332032,-0.20508 0.717774,-0.20508 0.410156,0 0.708008,0.20508 0.302734,0.20508 0.493164,0.62012 0.283203,-0.41504 0.605469,-0.62012 0.327148,-0.20508 0.693359,-0.20508 0.43457,0 0.74707,0.20996 0.317383,0.20508 0.478516,0.59082 0.166015,0.38575 0.166015,1.18653 v 3.31543 h -1.127929 v -2.96387 q 0,-0.77637 -0.136719,-1.03027 -0.136719,-0.25879 -0.458984,-0.25879 -0.375977,0 -0.605469,0.36133 -0.229492,0.35644 -0.229492,1.40136 v 2.49024 h -1.12793 v -2.8418 q 0,-0.84473 -0.09277,-1.08887 -0.122071,-0.32226 -0.493164,-0.32226 -0.249024,0 -0.458985,0.16601 -0.209961,0.16602 -0.302734,0.48828 -0.09277,0.31739 -0.09277,1.07911 v 2.51953 h -1.127929 v -5.18555 z"
                          id="path6449-8" />
                    </g>
                    <g
                        transform="translate(300.91415,857.11401)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6077-5">
                      <path
                          d="m 57.469727,470.46786 h 1.123046 v 0.98144 q 0,0.83496 -0.195312,1.24024 -0.239258,0.50293 -0.800781,0.74707 l -0.219727,-0.56641 q 0.332031,-0.13672 0.478516,-0.37109 0.146484,-0.2295 0.15625,-0.65918 h -0.541992 z"
                          id="path6452-7" />
                    </g>
                    <g
                        transform="translate(328.4454,857.11401)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6085-4">
                      <path
                          d="m 57.902344,471.83993 v -1.37207 h 1.127929 v 1.37207 z"
                          id="path6455-1" />
                    </g>
                    <g
                        transform="translate(355.06942,857.11401)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:10px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6093-8">
                      <path
                          d="m 58.681641,471.962 1.455078,-7.40235 h 0.844726 l -1.469726,7.40235 z"
                          id="path6458-5" />
                    </g>
                    <g
                        transform="translate(398.72519,858.17184)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:8px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6101-9">
                      <path
                          d="m 62.055664,467.93835 0.925781,-0.10938 q 0.15625,1.09766 1.023438,1.09766 0.429687,0 0.675781,-0.22266 0.246094,-0.22656 0.246094,-0.55859 0,-0.19531 -0.08594,-0.33203 -0.08594,-0.13672 -0.261718,-0.22266 -0.175782,-0.0898 -0.851563,-0.29687 -0.605469,-0.1836 -0.886719,-0.39844 -0.28125,-0.21484 -0.449218,-0.5625 -0.164063,-0.35156 -0.164063,-0.75391 0,-0.46875 0.210938,-0.84375 0.214843,-0.375 0.589843,-0.5664 0.375,-0.19141 0.925782,-0.19141 0.828125,0 1.292968,0.44922 0.464844,0.44922 0.492188,1.28516 l -0.949219,0.0508 q -0.0625,-0.46094 -0.269531,-0.64453 -0.207031,-0.1836 -0.589844,-0.1836 -0.382812,0 -0.589844,0.16016 -0.207031,0.16015 -0.207031,0.39844 0,0.23437 0.1875,0.39453 0.1875,0.16015 0.863281,0.35156 0.714844,0.20703 1.03125,0.4375 0.320313,0.22656 0.488282,0.58984 0.167968,0.35938 0.167968,0.875 0,0.7461 -0.460937,1.25391 -0.457031,0.50781 -1.433594,0.50781 -1.726562,0 -1.921875,-1.96484 z"
                          id="path6461-7" />
                      <path
                          d="m 67.563477,464.07507 v 2.10547 q 0.214843,-0.3125 0.472656,-0.46485 0.261719,-0.15625 0.566406,-0.15625 0.40625,0 0.679688,0.21485 0.273437,0.21484 0.390625,0.60937 0.08594,0.28906 0.08594,0.98438 v 2.43359 h -0.898437 v -2.19141 q 0,-0.76172 -0.09766,-0.95312 -0.136718,-0.25781 -0.464843,-0.25781 -0.347657,0 -0.542969,0.28125 -0.191406,0.27734 -0.191406,1.04296 v 2.07813 h -0.902344 v -5.72656 z"
                          id="path6463-5" />
                      <path
                          d="m 70.665039,465.09069 v -1.01562 h 0.902344 v 1.01562 z m 0,4.71094 v -4.14844 h 0.902344 v 4.14844 z"
                          id="path6465-3" />
                      <path
                          d="m 72.098633,465.65319 h 0.5 v -0.3125 q 0,-0.5664 0.105469,-0.82031 0.109375,-0.25391 0.347656,-0.39844 0.242187,-0.14453 0.59375,-0.14453 0.382812,0 0.75,0.14063 l -0.117188,0.76562 q -0.21875,-0.0625 -0.417968,-0.0625 -0.191407,0 -0.277344,0.10938 -0.08594,0.10937 -0.08594,0.42968 v 0.29297 h 0.671875 v 0.86328 h -0.671875 v 3.28516 h -0.898437 v -3.28516 h -0.5 v -0.86328 z"
                          id="path6467-8" />
                      <path
                          d="m 76.235352,465.65319 v 0.875 H 75.62207 v 1.67188 q 0,0.54297 0.02734,0.6289 0.05469,0.15625 0.222656,0.15625 0.125,0 0.359375,-0.10547 l 0.07813,0.85157 q -0.3125,0.16406 -0.707031,0.16406 -0.34375,0 -0.550781,-0.16406 -0.207031,-0.16407 -0.277344,-0.47266 -0.05469,-0.22656 -0.05469,-0.92187 v -1.8086 h -0.414063 v -0.875 h 0.414063 v -0.82422 l 0.902343,-0.64062 v 1.46484 h 0.613282 z"
                          id="path6469-8" />
                    </g>
                    <g
                        transform="translate(421.5123,886.17379)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:8px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6109-3">
                      <path
                          d="m 58.760742,467.69616 0.917969,0.35547 q -0.214844,0.96094 -0.714844,1.40625 -0.5,0.44141 -1.230469,0.44141 -0.917968,0 -1.488281,-0.70704 -0.65625,-0.8164 -0.65625,-2.20312 0,-1.46484 0.660156,-2.29297 0.574219,-0.71875 1.542969,-0.71875 0.789063,0 1.320313,0.53906 0.378906,0.38282 0.554687,1.13672 l -0.9375,0.27344 q -0.08984,-0.46484 -0.359375,-0.71094 -0.265625,-0.25 -0.628906,-0.25 -0.519531,0 -0.847656,0.45313 -0.328125,0.45312 -0.328125,1.49609 0,1.08203 0.320312,1.53906 0.320313,0.45703 0.832031,0.45703 0.375,0 0.648438,-0.28906 0.273437,-0.29297 0.394531,-0.92578 z"
                          id="path6472-1" />
                      <path
                          d="m 60.288086,467.66882 q 0,-0.60938 0.242187,-1.10938 0.242188,-0.5 0.632813,-0.75 0.390625,-0.25 0.878906,-0.25 0.820313,0 1.289063,0.64453 0.46875,0.64063 0.46875,1.5 0,0.64063 -0.246094,1.15625 -0.242188,0.51563 -0.640625,0.77735 -0.394531,0.25781 -0.867188,0.25781 -0.757812,0 -1.257812,-0.57813 -0.5,-0.57812 -0.5,-1.64843 z m 0.921875,0.0586 q 0,0.62891 0.246094,0.95313 0.246093,0.32031 0.59375,0.32031 0.339843,0 0.582031,-0.32422 0.242187,-0.32422 0.242187,-0.95703 0,-0.61719 -0.246093,-0.94141 -0.246094,-0.32422 -0.589844,-0.32422 -0.339844,0 -0.585938,0.32422 -0.242187,0.32422 -0.242187,0.94922 z"
                          id="path6474-8" />
                      <path
                          d="m 67.608398,469.80163 h -0.902343 v -2.11719 q 0,-0.63672 -0.05078,-0.84765 -0.05078,-0.21094 -0.191406,-0.32422 -0.136719,-0.11328 -0.3125,-0.11328 -0.226562,0 -0.410156,0.14843 -0.183594,0.14453 -0.257813,0.40235 -0.07422,0.25781 -0.07422,0.97265 v 1.87891 h -0.902344 v -4.14844 h 0.835937 v 0.60938 q 0.222657,-0.35157 0.5,-0.52735 0.28125,-0.17578 0.621094,-0.17578 0.394531,0 0.664063,0.20703 0.273437,0.20313 0.375,0.52735 0.105468,0.32031 0.105468,0.92968 z"
                          id="path6476-9" />
                      <path
                          d="m 70.084961,465.65319 v 0.875 H 69.47168 v 1.67188 q 0,0.54297 0.02734,0.6289 0.05469,0.15625 0.222657,0.15625 0.125,0 0.359375,-0.10547 l 0.07813,0.85157 q -0.3125,0.16406 -0.707032,0.16406 -0.34375,0 -0.550781,-0.16406 -0.207031,-0.16407 -0.277344,-0.47266 -0.05469,-0.22656 -0.05469,-0.92187 v -1.8086 h -0.414063 v -0.875 h 0.414063 v -0.82422 l 0.902344,-0.64062 v 1.46484 z"
                          id="path6478-6" />
                      <path
                          d="m 71.581055,469.80163 h -0.902344 v -4.14844 h 0.835937 v 0.58985 q 0.214844,-0.41407 0.382813,-0.54688 0.171875,-0.13672 0.394531,-0.13672 0.308594,0 0.589844,0.20703 l -0.28125,0.95703 q -0.222656,-0.17968 -0.421875,-0.17968 -0.1875,0 -0.332031,0.14062 -0.140625,0.13672 -0.203125,0.5 -0.0625,0.36328 -0.0625,1.33594 z"
                          id="path6480-4" />
                      <path
                          d="m 73.069336,467.66882 q 0,-0.60938 0.242187,-1.10938 0.242188,-0.5 0.632813,-0.75 0.390625,-0.25 0.878906,-0.25 0.820313,0 1.289063,0.64453 0.46875,0.64063 0.46875,1.5 0,0.64063 -0.246094,1.15625 -0.242188,0.51563 -0.640625,0.77735 -0.394531,0.25781 -0.867188,0.25781 -0.757812,0 -1.257812,-0.57813 -0.5,-0.57812 -0.5,-1.64843 z m 0.921875,0.0586 q 0,0.62891 0.246094,0.95313 0.246093,0.32031 0.59375,0.32031 0.339843,0 0.582031,-0.32422 0.242187,-0.32422 0.242187,-0.95703 0,-0.61719 -0.246093,-0.94141 -0.246094,-0.32422 -0.589844,-0.32422 -0.339844,0 -0.585938,0.32422 -0.242187,0.32422 -0.242187,0.94922 z"
                          id="path6482-3" />
                      <path
                          d="m 77.295898,469.80163 v -5.72656 h 0.902344 v 5.72656 z"
                          id="path6484-3" />
                    </g>
                    <g
                        transform="translate(387.66464,886.12692)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:8px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6117-3">
                      <path
                          d="m 55.644531,469.80163 v -5.72656 H 57.0625 l 0.851562,3.90625 0.84375,-3.90625 h 1.421875 v 5.72656 h -0.878906 v -4.50781 l -0.933594,4.50781 h -0.914062 l -0.925781,-4.50781 v 4.50781 z"
                          id="path6487-8" />
                      <path
                          d="m 63.09375,468.48132 0.894531,0.18359 q -0.179687,0.625 -0.558594,0.92969 -0.378906,0.30078 -0.921875,0.30078 -0.753906,0 -1.164062,-0.50391 -0.484375,-0.58593 -0.484375,-1.64062 0,-1.03906 0.488281,-1.66406 0.414063,-0.52735 1.070313,-0.52735 0.730468,0 1.144531,0.53906 0.476562,0.61719 0.476562,1.82032 l -0.0039,0.125 h -2.253906 q 0.0078,0.49218 0.21875,0.76172 0.214844,0.26953 0.515625,0.26953 0.433594,0 0.578125,-0.59375 z m 0.05078,-1.10938 q -0.01172,-0.48437 -0.207031,-0.72656 -0.195313,-0.24609 -0.464844,-0.24609 -0.285156,0 -0.480469,0.2539 -0.199218,0.25781 -0.195312,0.71875 z"
                          id="path6489-6" />
                      <path
                          d="m 67.855469,469.80163 h -0.902344 v -2.11719 q 0,-0.63672 -0.05078,-0.84765 -0.05078,-0.21094 -0.191407,-0.32422 -0.136718,-0.11328 -0.3125,-0.11328 -0.226562,0 -0.410156,0.14843 -0.183594,0.14453 -0.257812,0.40235 -0.07422,0.25781 -0.07422,0.97265 v 1.87891 h -0.902344 v -4.14844 h 0.835938 v 0.60938 q 0.222656,-0.35157 0.5,-0.52735 0.28125,-0.17578 0.621093,-0.17578 0.394532,0 0.664063,0.20703 0.273437,0.20313 0.375,0.52735 0.105469,0.32031 0.105469,0.92968 z"
                          id="path6491-0" />
                      <path
                          d="m 71.011719,469.80163 v -0.62109 q -0.1875,0.33593 -0.492188,0.52734 -0.304687,0.1875 -0.636719,0.1875 -0.335937,0 -0.601562,-0.17578 -0.265625,-0.17578 -0.398438,-0.5 -0.128906,-0.32422 -0.128906,-0.94141 v -2.625 h 0.902344 v 1.90625 q 0,0.81641 0.03906,1.03906 0.04297,0.21875 0.183594,0.33985 0.140625,0.12109 0.339844,0.12109 0.226562,0 0.417969,-0.15625 0.191406,-0.16015 0.25,-0.40625 0.0625,-0.25 0.0625,-1.09375 v -1.75 h 0.898437 v 4.14844 h -0.835937 z"
                          id="path6493-4" />
                    </g>
                    <g
                        transform="translate(351.50448,886.17184)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:8px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6125-8">
                      <path
                          d="m 55.920898,469.80163 v -5.72656 h 1.417969 l 0.851563,3.90625 0.84375,-3.90625 h 1.421875 v 5.72656 h -0.878907 v -4.50781 l -0.933593,4.50781 h -0.914063 l -0.925781,-4.50781 v 4.50781 z"
                          id="path6496-8" />
                      <path
                          d="m 63.370117,468.48132 0.894531,0.18359 q -0.179687,0.625 -0.558593,0.92969 -0.378907,0.30078 -0.921875,0.30078 -0.753907,0 -1.164063,-0.50391 -0.484375,-0.58593 -0.484375,-1.64062 0,-1.03906 0.488281,-1.66406 0.414063,-0.52735 1.070313,-0.52735 0.730469,0 1.144531,0.53906 0.476563,0.61719 0.476563,1.82032 l -0.0039,0.125 h -2.253906 q 0.0078,0.49218 0.21875,0.76172 0.214844,0.26953 0.515625,0.26953 0.433594,0 0.578125,-0.59375 z m 0.05078,-1.10938 q -0.01172,-0.48437 -0.207031,-0.72656 -0.195312,-0.24609 -0.464844,-0.24609 -0.285156,0 -0.480468,0.2539 -0.199219,0.25781 -0.195313,0.71875 z"
                          id="path6498-8" />
                      <path
                          d="m 66.592773,465.65319 v 0.875 h -0.613281 v 1.67188 q 0,0.54297 0.02734,0.6289 0.05469,0.15625 0.222656,0.15625 0.125,0 0.359375,-0.10547 l 0.07813,0.85157 q -0.3125,0.16406 -0.707031,0.16406 -0.34375,0 -0.550781,-0.16406 -0.207032,-0.16407 -0.277344,-0.47266 -0.05469,-0.22656 -0.05469,-0.92187 v -1.8086 h -0.414062 v -0.875 h 0.414062 v -0.82422 l 0.902344,-0.64062 v 1.46484 z"
                          id="path6500-9" />
                      <path
                          d="m 67.897461,466.91882 -0.816406,-0.17969 q 0.148437,-0.62891 0.488281,-0.90234 0.34375,-0.27735 0.984375,-0.27735 0.570312,0 0.871094,0.16016 0.300781,0.16015 0.429687,0.4375 0.128906,0.27344 0.128906,1 l -0.0078,1.28125 q 0,0.53906 0.04297,0.80469 0.04297,0.26171 0.160156,0.55859 h -0.890625 l -0.117188,-0.45313 q -0.230468,0.27344 -0.496093,0.41016 -0.261719,0.13672 -0.558594,0.13672 -0.496094,0 -0.8125,-0.33203 -0.316406,-0.33594 -0.316406,-0.89063 0,-0.35156 0.128906,-0.61328 0.128906,-0.26172 0.363281,-0.41797 0.234375,-0.15625 0.75,-0.27734 0.625,-0.14453 0.871094,-0.26953 0,-0.34375 -0.05078,-0.44922 -0.04687,-0.10938 -0.179688,-0.17578 -0.128906,-0.0703 -0.367187,-0.0703 -0.242188,0 -0.382813,0.10937 -0.136719,0.10938 -0.222656,0.41016 z m 1.203125,0.89062 q -0.171875,0.0703 -0.535156,0.16406 -0.417969,0.10938 -0.546875,0.24219 -0.128907,0.13281 -0.128907,0.34375 0,0.23828 0.140625,0.40235 0.144532,0.16015 0.359375,0.16015 0.191407,0 0.378907,-0.1289 0.1875,-0.13282 0.257812,-0.3125 0.07422,-0.17969 0.07422,-0.65235 z"
                          id="path6502-7" />
                    </g>
                    <g
                        transform="translate(316.09433,886.12692)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:8px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6133-7">
                      <path
                          d="m 61.68457,469.80163 h -1.03125 l -0.410156,-1.30078 h -1.875 l -0.386719,1.30078 h -1.007812 l 1.828125,-5.72656 h 1.003906 z m -1.746093,-2.26563 -0.644532,-2.125 -0.636718,2.125 z"
                          id="path6505-6" />
                      <path
                          d="m 62.180664,469.80163 v -5.72656 h 0.902344 v 5.72656 z"
                          id="path6507-4" />
                      <path
                          d="m 65.563477,465.65319 v 0.875 h -0.613282 v 1.67188 q 0,0.54297 0.02734,0.6289 0.05469,0.15625 0.222656,0.15625 0.125,0 0.359375,-0.10547 l 0.07813,0.85157 q -0.3125,0.16406 -0.707031,0.16406 -0.34375,0 -0.550781,-0.16406 -0.207031,-0.16407 -0.277344,-0.47266 -0.05469,-0.22656 -0.05469,-0.92187 v -1.8086 h -0.414063 v -0.875 h 0.414063 v -0.82422 l 0.902343,-0.64062 v 1.46484 h 0.613282 z"
                          id="path6509-3" />
                    </g>
                    <g
                        transform="translate(208.45565,886.12692)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:8px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6141-0">
                      <path
                          d="m 60.539062,467.93835 0.925782,-0.10938 q 0.15625,1.09766 1.023437,1.09766 0.429688,0 0.675781,-0.22266 0.246094,-0.22656 0.246094,-0.55859 0,-0.19531 -0.08594,-0.33203 -0.08594,-0.13672 -0.261719,-0.22266 -0.175781,-0.0898 -0.851563,-0.29687 -0.605468,-0.1836 -0.886718,-0.39844 -0.28125,-0.21484 -0.449219,-0.5625 -0.164063,-0.35156 -0.164063,-0.75391 0,-0.46875 0.210938,-0.84375 0.214844,-0.375 0.589844,-0.5664 0.375,-0.19141 0.925781,-0.19141 0.828125,0 1.292969,0.44922 0.464843,0.44922 0.492187,1.28516 l -0.949219,0.0508 q -0.0625,-0.46094 -0.269531,-0.64453 -0.207031,-0.1836 -0.589844,-0.1836 -0.382812,0 -0.589843,0.16016 -0.207032,0.16015 -0.207032,0.39844 0,0.23437 0.1875,0.39453 0.1875,0.16015 0.863282,0.35156 0.714843,0.20703 1.03125,0.4375 0.320312,0.22656 0.488281,0.58984 0.167969,0.35938 0.167969,0.875 0,0.7461 -0.460938,1.25391 -0.457031,0.50781 -1.433594,0.50781 -1.726562,0 -1.921875,-1.96484 z"
                          id="path6512-3" />
                      <path
                          d="m 65.121094,465.65319 h 0.839843 v 0.60938 q 0.171875,-0.32813 0.453125,-0.51563 0.28125,-0.1875 0.605469,-0.1875 0.582031,0 1,0.55469 0.421875,0.55469 0.421875,1.57422 0,1.07031 -0.421875,1.64062 -0.421875,0.56641 -1.003906,0.56641 -0.269531,0 -0.503906,-0.12891 -0.230469,-0.13281 -0.488282,-0.47656 v 2.08984 h -0.902343 z m 0.890625,2.00391 q 0,0.70312 0.226562,1.03515 0.230469,0.33204 0.554688,0.33204 0.308593,0 0.519531,-0.30469 0.210937,-0.3086 0.210937,-1.00391 0,-0.66015 -0.21875,-0.97265 -0.214843,-0.31641 -0.527343,-0.31641 -0.328125,0 -0.546875,0.30859 -0.21875,0.30469 -0.21875,0.92188 z"
                          id="path6514-0" />
                      <path
                          d="m 69.835937,466.91882 -0.816406,-0.17969 q 0.148438,-0.62891 0.488281,-0.90234 0.34375,-0.27735 0.984375,-0.27735 0.570313,0 0.871094,0.16016 0.300781,0.16015 0.429688,0.4375 0.128906,0.27344 0.128906,1 l -0.0078,1.28125 q 0,0.53906 0.04297,0.80469 0.04297,0.26171 0.160156,0.55859 h -0.890625 l -0.117187,-0.45313 q -0.230469,0.27344 -0.496094,0.41016 -0.261719,0.13672 -0.558594,0.13672 -0.496093,0 -0.8125,-0.33203 -0.316406,-0.33594 -0.316406,-0.89063 0,-0.35156 0.128906,-0.61328 0.128907,-0.26172 0.363282,-0.41797 0.234375,-0.15625 0.75,-0.27734 0.625,-0.14453 0.871093,-0.26953 0,-0.34375 -0.05078,-0.44922 -0.04687,-0.10938 -0.179687,-0.17578 -0.128907,-0.0703 -0.367188,-0.0703 -0.242187,0 -0.382812,0.10937 -0.136719,0.10938 -0.222657,0.41016 z m 1.203125,0.89062 q -0.171875,0.0703 -0.535156,0.16406 -0.417969,0.10938 -0.546875,0.24219 -0.128906,0.13281 -0.128906,0.34375 0,0.23828 0.140625,0.40235 0.144531,0.16015 0.359375,0.16015 0.191406,0 0.378906,-0.1289 0.1875,-0.13282 0.257813,-0.3125 0.07422,-0.17969 0.07422,-0.65235 v -0.21875 z"
                          id="path6516-9" />
                      <path
                          d="m 75.769531,466.87975 -0.886719,0.19532 q -0.09766,-0.65235 -0.613281,-0.65235 -0.332031,0 -0.535156,0.28125 -0.203125,0.28125 -0.203125,0.94922 0,0.73828 0.203125,1.04297 0.203125,0.30469 0.542969,0.30469 0.253906,0 0.417968,-0.17188 0.164063,-0.17578 0.234375,-0.61718 l 0.886719,0.18359 q -0.273437,1.5 -1.574219,1.5 -0.832031,0 -1.234375,-0.63281 -0.402343,-0.63282 -0.402343,-1.52344 0,-1.06641 0.453125,-1.62109 0.457031,-0.5586 1.195312,-0.5586 0.597656,0 0.972656,0.31641 0.378907,0.3164 0.542969,1.0039 z"
                          id="path6518-2" />
                      <path
                          d="m 78.417969,468.48132 0.894531,0.18359 q -0.179688,0.625 -0.558594,0.92969 -0.378906,0.30078 -0.921875,0.30078 -0.753906,0 -1.164062,-0.50391 -0.484375,-0.58593 -0.484375,-1.64062 0,-1.03906 0.488281,-1.66406 0.414062,-0.52735 1.070312,-0.52735 0.730469,0 1.144532,0.53906 0.476562,0.61719 0.476562,1.82032 l -0.0039,0.125 h -2.253906 q 0.0078,0.49218 0.21875,0.76172 0.214843,0.26953 0.515625,0.26953 0.433593,0 0.578125,-0.59375 z m 0.05078,-1.10938 q -0.01172,-0.48437 -0.207031,-0.72656 -0.195313,-0.24609 -0.464844,-0.24609 -0.285156,0 -0.480469,0.2539 -0.199219,0.25781 -0.195312,0.71875 z"
                          id="path6520-5" />
                    </g>
                    <g
                        transform="translate(117.85995,886.12692)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:8px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6149-4">
                      <path
                          d="m 61.917969,469.80163 h -1.03125 l -0.410157,-1.30078 h -1.875 l -0.386718,1.30078 h -1.007813 l 1.828125,-5.72656 h 1.003906 z m -1.746094,-2.26563 -0.644531,-2.125 -0.636719,2.125 z"
                          id="path6523-0" />
                      <path
                          d="m 62.414062,469.80163 v -5.72656 h 0.902344 v 5.72656 z"
                          id="path6525-5" />
                      <path
                          d="m 65.796875,465.65319 v 0.875 h -0.613281 v 1.67188 q 0,0.54297 0.02734,0.6289 0.05469,0.15625 0.222657,0.15625 0.125,0 0.359375,-0.10547 l 0.07813,0.85157 q -0.3125,0.16406 -0.707032,0.16406 -0.34375,0 -0.550781,-0.16406 -0.207031,-0.16407 -0.277344,-0.47266 -0.05469,-0.22656 -0.05469,-0.92187 v -1.8086 h -0.414063 v -0.875 h 0.414063 v -0.82422 l 0.902344,-0.64062 v 1.46484 z"
                          id="path6527-9" />
                    </g>
                    <g
                        transform="translate(80.270106,886.17184)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:8px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6157-4">
                      <path
                          d="m 55.151367,469.80163 v -5.72656 h 1.417969 l 0.851562,3.90625 0.84375,-3.90625 h 1.421875 v 5.72656 h -0.878906 v -4.50781 l -0.933594,4.50781 h -0.914062 l -0.925781,-4.50781 v 4.50781 z"
                          id="path6530-6" />
                      <path
                          d="m 62.600586,468.48132 0.894531,0.18359 q -0.179687,0.625 -0.558594,0.92969 -0.378906,0.30078 -0.921875,0.30078 -0.753906,0 -1.164062,-0.50391 -0.484375,-0.58593 -0.484375,-1.64062 0,-1.03906 0.488281,-1.66406 0.414063,-0.52735 1.070313,-0.52735 0.730468,0 1.144531,0.53906 0.476562,0.61719 0.476562,1.82032 l -0.0039,0.125 h -2.253906 q 0.0078,0.49218 0.21875,0.76172 0.214844,0.26953 0.515625,0.26953 0.433594,0 0.578125,-0.59375 z m 0.05078,-1.10938 q -0.01172,-0.48437 -0.207031,-0.72656 -0.195313,-0.24609 -0.464844,-0.24609 -0.285156,0 -0.480469,0.2539 -0.199218,0.25781 -0.195312,0.71875 z"
                          id="path6532-9" />
                      <path
                          d="m 65.823242,465.65319 v 0.875 h -0.613281 v 1.67188 q 0,0.54297 0.02734,0.6289 0.05469,0.15625 0.222656,0.15625 0.125,0 0.359375,-0.10547 l 0.07813,0.85157 q -0.3125,0.16406 -0.707031,0.16406 -0.34375,0 -0.550782,-0.16406 -0.207031,-0.16407 -0.277343,-0.47266 -0.05469,-0.22656 -0.05469,-0.92187 v -1.8086 h -0.414062 v -0.875 h 0.414062 v -0.82422 l 0.902344,-0.64062 v 1.46484 z"
                          id="path6534-2" />
                      <path
                          d="m 67.12793,466.91882 -0.816407,-0.17969 q 0.148438,-0.62891 0.488282,-0.90234 0.34375,-0.27735 0.984375,-0.27735 0.570312,0 0.871093,0.16016 0.300782,0.16015 0.429688,0.4375 0.128906,0.27344 0.128906,1 l -0.0078,1.28125 q 0,0.53906 0.04297,0.80469 0.04297,0.26171 0.160157,0.55859 h -0.890625 l -0.117188,-0.45313 q -0.230469,0.27344 -0.496094,0.41016 -0.261718,0.13672 -0.558593,0.13672 -0.496094,0 -0.8125,-0.33203 -0.316407,-0.33594 -0.316407,-0.89063 0,-0.35156 0.128907,-0.61328 0.128906,-0.26172 0.363281,-0.41797 0.234375,-0.15625 0.75,-0.27734 0.625,-0.14453 0.871094,-0.26953 0,-0.34375 -0.05078,-0.44922 -0.04687,-0.10938 -0.179687,-0.17578 -0.128906,-0.0703 -0.367188,-0.0703 -0.242187,0 -0.382812,0.10937 -0.136719,0.10938 -0.222656,0.41016 z m 1.203125,0.89062 q -0.171875,0.0703 -0.535157,0.16406 -0.417968,0.10938 -0.546875,0.24219 -0.128906,0.13281 -0.128906,0.34375 0,0.23828 0.140625,0.40235 0.144531,0.16015 0.359375,0.16015 0.191406,0 0.378906,-0.1289 0.1875,-0.13282 0.257813,-0.3125 0.07422,-0.17969 0.07422,-0.65235 z"
                          id="path6536-2" />
                    </g>
                    <g
                        transform="translate(38.684172,886.17379)"
                        style="font-style:normal;font-variant:normal;font-weight:bold;font-stretch:condensed;font-size:8px;line-height:125%;font-family:'Arial Narrow';-inkscape-font-specification:'Arial Narrow Bold Condensed';text-align:center;letter-spacing:0px;word-spacing:0px;text-anchor:middle;fill:#000000;fill-opacity:1;stroke:none"
                        id="flowRoot6165-4">
                      <path
                          d="M 58.582031,467.69616 59.5,468.05163 q -0.214844,0.96094 -0.714844,1.40625 -0.5,0.44141 -1.230469,0.44141 -0.917968,0 -1.488281,-0.70704 -0.65625,-0.8164 -0.65625,-2.20312 0,-1.46484 0.660156,-2.29297 0.574219,-0.71875 1.542969,-0.71875 0.789063,0 1.320313,0.53906 0.378906,0.38282 0.554687,1.13672 l -0.9375,0.27344 q -0.08984,-0.46484 -0.359375,-0.71094 -0.265625,-0.25 -0.628906,-0.25 -0.519531,0 -0.847656,0.45313 -0.328125,0.45312 -0.328125,1.49609 0,1.08203 0.320312,1.53906 0.320313,0.45703 0.832031,0.45703 0.375,0 0.648438,-0.28906 0.273437,-0.29297 0.394531,-0.92578 z"
                          id="path6539-7" />
                      <path
                          d="m 60.109375,467.66882 q 0,-0.60938 0.242187,-1.10938 0.242188,-0.5 0.632813,-0.75 0.390625,-0.25 0.878906,-0.25 0.820313,0 1.289063,0.64453 0.46875,0.64063 0.46875,1.5 0,0.64063 -0.246094,1.15625 -0.242188,0.51563 -0.640625,0.77735 -0.394531,0.25781 -0.867188,0.25781 -0.757812,0 -1.257812,-0.57813 -0.5,-0.57812 -0.5,-1.64843 z m 0.921875,0.0586 q 0,0.62891 0.246094,0.95313 0.246093,0.32031 0.59375,0.32031 0.339843,0 0.582031,-0.32422 0.242187,-0.32422 0.242187,-0.95703 0,-0.61719 -0.246093,-0.94141 -0.246094,-0.32422 -0.589844,-0.32422 -0.339844,0 -0.585938,0.32422 -0.242187,0.32422 -0.242187,0.94922 z"
                          id="path6541-7" />
                      <path
                          d="m 67.429687,469.80163 h -0.902343 v -2.11719 q 0,-0.63672 -0.05078,-0.84765 -0.05078,-0.21094 -0.191406,-0.32422 -0.136719,-0.11328 -0.3125,-0.11328 -0.226562,0 -0.410156,0.14843 -0.183594,0.14453 -0.257813,0.40235 -0.07422,0.25781 -0.07422,0.97265 v 1.87891 h -0.902344 v -4.14844 h 0.835937 v 0.60938 q 0.222657,-0.35157 0.5,-0.52735 0.28125,-0.17578 0.621094,-0.17578 0.394531,0 0.664063,0.20703 0.273437,0.20313 0.375,0.52735 0.105468,0.32031 0.105468,0.92968 z"
                          id="path6543-5" />
                      <path
                          d="m 69.90625,465.65319 v 0.875 h -0.613281 v 1.67188 q 0,0.54297 0.02734,0.6289 0.05469,0.15625 0.222657,0.15625 0.125,0 0.359375,-0.10547 l 0.07813,0.85157 q -0.3125,0.16406 -0.707032,0.16406 -0.34375,0 -0.550781,-0.16406 -0.207031,-0.16407 -0.277344,-0.47266 -0.05469,-0.22656 -0.05469,-0.92187 v -1.8086 h -0.414063 v -0.875 h 0.414063 v -0.82422 l 0.902344,-0.64062 v 1.46484 z"
                          id="path6545-4" />
                      <path
                          d="M 71.402344,469.80163 H 70.5 v -4.14844 h 0.835937 v 0.58985 q 0.214844,-0.41407 0.382813,-0.54688 0.171875,-0.13672 0.394531,-0.13672 0.308594,0 0.589844,0.20703 l -0.28125,0.95703 Q 72.199219,466.54382 72,466.54382 q -0.1875,0 -0.332031,0.14062 -0.140625,0.13672 -0.203125,0.5 -0.0625,0.36328 -0.0625,1.33594 z"
                          id="path6547-8" />
                      <path
                          d="m 72.890625,467.66882 q 0,-0.60938 0.242187,-1.10938 0.242188,-0.5 0.632813,-0.75 0.390625,-0.25 0.878906,-0.25 0.820313,0 1.289063,0.64453 0.46875,0.64063 0.46875,1.5 0,0.64063 -0.246094,1.15625 -0.242188,0.51563 -0.640625,0.77735 -0.394531,0.25781 -0.867188,0.25781 -0.757812,0 -1.257812,-0.57813 -0.5,-0.57812 -0.5,-1.64843 z m 0.921875,0.0586 q 0,0.62891 0.246094,0.95313 0.246093,0.32031 0.59375,0.32031 0.339843,0 0.582031,-0.32422 0.242187,-0.32422 0.242187,-0.95703 0,-0.61719 -0.246093,-0.94141 -0.246094,-0.32422 -0.589844,-0.32422 -0.339844,0 -0.585938,0.32422 -0.242187,0.32422 -0.242187,0.94922 z"
                          id="path6549-1" />
                      <path
                          d="m 77.117187,469.80163 v -5.72656 h 0.902344 v 5.72656 z"
                          id="path6551-2" />
                    </g>
                  </g>
                </svg>
              </div>

            </div>
          </em>
          <Button :handle-click="handleKeyboardAnimationButton"
                  :is-disabled="animationButtons.keyboardAnimationRunning">
            <template #icon>
            <span
                v-html='`<i class="fa-solid fa-play"></i>`'></span>
              <span> Play</span>
            </template>

          </Button>
        </div>


        <div class="mb-20">
          <h2 class="mt-0 mb-6 text-3xl font-medium leading-tight">Date</h2>
          <Paragraph paragraph="Numerical strings with 4 to 8 adjacent digits are being checked for date representations. To be identified as a date, the following requirements have to be met:"></Paragraph>
          <em>
          <ul class="mb-10">
            <li>The year is represented by 2 or 4 digits</li>
            <li>The year cannot be in the middle of the date representation</li>
            <li>The month lies between 1 and 12</li>
            <li>The day lies between 1 and 31</li>
            <li>The date must be in the past</li>
          </ul>
          </em>
          <Paragraph paragraph="If several valid dates are possible, the one closest to the current date ist chosen."></Paragraph>
          <em>
            <div class="rounded bg-font-light p-10">
              <div class="relative mb-10">
                <span id= "date" class="block top-0">211596</span>
              </div>
              <div>
              <div  class=" inline transition duration-1000 linear">2115<span class="dash" :class="dateElementVisibility.displayDashes ? '' : 'hidden'">-</span>9<span class="dash" :class="dateElementVisibility.displayDashes ? '' : 'hidden'">-</span>6&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="message1 transition duration-1000 linear" :class="dateElementVisibility.displayMessage1 ? 'opacity-1' : 'opacity-0'">Lies in the future</span></div>
              <div>21<span class="dash" :class="dateElementVisibility.displayDashes ? '' : 'hidden'">-</span>15<span class="dash" :class="dateElementVisibility.displayDashes ? '' : 'hidden'">-</span>96&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="message2 transition duration-1000 linear" :class="dateElementVisibility.displayMessage2 ? 'opacity-1' : 'opacity-0'">Not a valid date</span></div>
              <div id="matchedDate" >2<span class="dash" :class="dateElementVisibility.displayDashes ? '' : 'hidden'">-</span>1<span class="dash" :class="dateElementVisibility.displayDashes ? '' : 'hidden'">-</span>1596&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="message3 transition duration-1000 linear" :class="dateElementVisibility.displayMessage3 ? 'opacity-1' : 'opacity-0'">Lies in the past</span></div>
              </div>

            </div>
          </em>
          <Button :handle-click="handleDateAnimationButton"
                  :is-disabled="animationButtons.dateAnimationRunning">
            <template #icon>
            <span
                v-html='`<i class="fa-solid fa-play"></i>`'></span>
              <span> Play</span>
            </template>

          </Button>
        </div>

        <Paragraph paragraph="Multiple matches out of these 5 categories can occur in one password. As for now it's not determined which of these patterns will be considered for the guessing and score evaluation."></Paragraph>
      </main>
    </template>
  </PageCard>
</template>

<script>
import Paragraph from '@/components/text/Paragraph';
import PageCard from '@/components/cards/PageCard';
import Button from '@/components/button/Button';

export default {
	components: {
		Button,
		Paragraph,
		PageCard
	},
	data() {
		return {
			animationButtons: {
				tokensAnimationRunning: false,
				sequenceAnimationRunning: false,
				repeatAnimationRunning: false,
				keyboardAnimationRunning: false,
				dateAnimationRunning: false
			},
			firstTwentyWordlist: '123456,password,12345678,qwerty,123456789,12345,1234,111111,1234567,dragon,123123,baseball,abc123,football,monkey,letmein,shadow,master,696969,mustang'.split(','),
			tokenTransformed: false,
			sequenceClasses: ['sequence1', 'sequence2', 'sequence3', 'sequence4'],
			keyboardPatternArray: ['rect5394-9', 'rect5396-4', 'rect5398-7', 'rect5370-8', 'rect5372-9', 'rect5346-8', 'rect5346-9', 'rect5348-7'],
			dateElementVisibility: {
				displayDashes: false,
				displayMessage1: false,
				displayMessage2: false,
				displayMessage3: false

			}
		};

	},
	computed: {
	},
	methods: {
		handleTokenAnimationButton() {
			if (this.animationButtons.tokensAnimationRunning) {
				return;
			}
			this.startTokensAnimation();
		},
		startTokensAnimation() {

			this.animationButtons.tokensAnimationRunning = true;
			this.resetTokensAnimation();

			//transform to lowercase
			const token = document.getElementById('token');
			const tokenTransformed = document.getElementById('token-transformed');

			this.toggleTokenTransformed();


			// highlight wordlist
			const wordlist = [];
			let wordIndex = 0;
			this.firstTwentyWordlist.forEach((word, index) => {
				if (word === tokenTransformed.innerText) {
					wordIndex = index;
				}
			});

			for (let i = 0; i < wordIndex + 1; i ++) {
				const timeOut = 400 * i + 1500;
				const currentWord = document.getElementById(this.firstTwentyWordlist[i]);
				wordlist.push(currentWord);

				setTimeout(() => {

					this.toggleHighlight(wordlist, i);
					if (i === wordlist.length - 1){
						this.animationButtons.tokensAnimationRunning = false;
						this.toggleTokenTransformed();
					}
				}, timeOut);
			}

		},
		toggleHighlight(arr, index) {
			arr[index].classList.add('bg-third');
			if (index > 0) {
				arr[index - 1].classList.remove('bg-third');
			}
		},
		toggleTokenTransformed() {
			this.tokenTransformed = ! this.tokenTransformed;
		},
		resetTokensAnimation() {
			if (this.tokenTransformed) {
				this.toggleTokenTransformed();
			}
			const tokenList = document.getElementsByClassName('token');
			Object.keys(tokenList).forEach((token) => {
				tokenList[token].classList.remove('bg-third');
			});
		},

		handleSequenceAnimationButton() {
			if (this.animationButtons.sequenceAnimationRunning) {
				return;
			}
			this.startSequenceAnimation();
		},
		startSequenceAnimation() {

			this.animationButtons.sequenceAnimationRunning = true;
			this.resetSequenceAnimation();

			for (let i = 0; i < this.sequenceClasses.length; i ++) {
				const sequenceElements = document.getElementsByClassName('sequence' + (i + 1));
				const timeOutAdd = 1000 * (i + 1);
				const timeOutRemove = timeOutAdd + 500;

				setTimeout(() => {

					Object.keys(sequenceElements).forEach((element) => {
						sequenceElements[element].classList.add('text-third');

					});

					if (i === this.sequenceClasses.length - 1){
						this.animationButtons.sequenceAnimationRunning = false;
					}
				}, timeOutAdd);
			}
		},
		resetSequenceAnimation() {
			const sequenceElements = document.getElementsByTagName('td');
			Object.keys(sequenceElements).forEach((element) => {
				sequenceElements[element].classList.remove('text-third');
			});
		},
		handleRepeatAnimationButton() {
			if (this.animationButtons.repeatAnimationRunning) {
				return;
			}
			this.startRepeatAnimation();
		},
		startRepeatAnimation(){
			this.animationButtons.repeatAnimationRunning = true;
			this.resetRepeatAnimation();

			const repeatElements = 4;
			const timeOut = 1000;

			setTimeout(() => {

				document.getElementById('repeat2').classList.add('bg-third');
				document.getElementById('repeat3').classList.add('bg-third');


			}, timeOut);

			setTimeout(() => {

				document.getElementById('repeat5').classList.add('bg-third');
				document.getElementById('repeat6').classList.add('bg-third');

			}, 2 * timeOut);

			setTimeout(() => {

				this.resetRepeatAnimation();

			}, 3 * timeOut);

			setTimeout(() => {

				document.getElementById('repeat1').classList.add('bg-third');
				document.getElementById('repeat2').classList.add('bg-third');
				document.getElementById('repeat3').classList.add('bg-third');

			}, 4 * timeOut);

			setTimeout(() => {

				document.getElementById('repeat4').classList.add('bg-third');
				document.getElementById('repeat5').classList.add('bg-third');
				document.getElementById('repeat6').classList.add('bg-third');

				this.animationButtons.repeatAnimationRunning = false;

			}, 5 * timeOut);

		},
		resetRepeatAnimation(){
			const repeatElements = document.getElementsByClassName('repeat');
			Object.keys(repeatElements).forEach((element) => {
				repeatElements[element].classList.remove('bg-third');
			});
		},


		handleKeyboardAnimationButton() {
			if (this.animationButtons.keyboardAnimationRunning) {
				return;
			}
			this.startKeyboardAnimation();
		},
		startKeyboardAnimation(){
			this.animationButtons.keyboardAnimationRunning = true;
			this.resetKeyboardAnimation();


			for (let i = 0; i < this.keyboardPatternArray.length; i ++) {

				const timeOut = 500 * (i + 1);

				setTimeout(() => {
					const key = document.getElementById(this.keyboardPatternArray[i]);
					if (key) {
						key.style.fill = '#F1A864';
					}

					if (i === this.keyboardPatternArray.length - 1) {
						this.animationButtons.keyboardAnimationRunning = false;
					}
				}, timeOut);
			}

		},
		resetKeyboardAnimation(){
			this.keyboardPatternArray.forEach((element) => {
				const key = document.getElementById(element);
				if (key) {
					key.style.fill = 'none';
				}
			});
		},


		handleDateAnimationButton() {
			if (this.animationButtons.dateAnimationRunning) {
				return;
			}
			this.startDateAnimation();
		},
		startDateAnimation(){
			this.animationButtons.dateAnimationRunning = true;
			this.resetDateAnimation();
			const timeOut = 1500;

			setTimeout(() => {
				this.dateElementVisibility.displayDashes = true;

			}, timeOut);

			setTimeout(() => {
				this.dateElementVisibility.displayMessage2 = true;

			}, timeOut * 2 );

			setTimeout(() => {
				this.dateElementVisibility.displayMessage1 = true;

			}, timeOut * 3 );

			setTimeout(() => {
				this.dateElementVisibility.displayMessage3 = true;

			}, timeOut * 4 );

			setTimeout(() => {
				document.getElementById('matchedDate').classList.add('bg-third');
				this.animationButtons.dateAnimationRunning = false;

			}, timeOut * 5 );

		},
		resetDateAnimation(){
			Object.keys(this.dateElementVisibility).forEach((element) => {
				this.dateElementVisibility[element] = false;
			});
			document.getElementById('matchedDate').classList.remove('bg-third');
		}

	}
};
</script>
