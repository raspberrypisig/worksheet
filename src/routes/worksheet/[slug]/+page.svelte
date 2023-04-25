

<script lang="ts">
    import { goto } from '$app/navigation';

    export let data;
    function getRandomInt(max: number) {
      return Math.floor(Math.random() * max ) + 1;
    }


    function next() {
      const nextPage = parseInt(data.slug) + 1;
      goto(`/worksheet/${nextPage}`);  
    }

    function previous() {
      if (parseInt(data.slug) === 1) return;
      const nextPage = parseInt(data.slug) - 1;
      goto(`/worksheet/${nextPage}`);  
    }  
    
    function randomWorksheet() {
      const randomNumber = getRandomInt(data.total_words_count); 
      goto(`/worksheet/${randomNumber}`);  
    }      

  </script>
  
  <div id="buttons">
    <ul class="paddingleft">
      <li><button on:click={next}>Next</button></li>
      <li><button on:click={previous}>Previous</button></li>
      <li><button on:click={randomWorksheet}>Random</button></li>
      <li><input maxlength="5" size="5" bind:value="{data.slug}" on:input={() => goto(`/worksheet/${data.slug}`)}></li>
    </ul>
  </div>
  
  <h1>What is it ?-{data.roman_slug}</h1>
  
  <h2>CLUE</h2>
  
  <p>{data.clue}</p>
 
  
  
  <h2> LETTER TABLE</h2>
  
      <table class="lettertable">
       {#each data.conversion_table as row}
        <tr>
        {#each row as cell}
          <td class="{cell.class}">
          {cell.value}
          </td>
        {/each}
        </tr>
       {/each}
      </table>
  
      <h2>CODE</h2>
  

      
      <table class="noborder paddingleft">
        <tr>
         {#each data.answer_line1 as d}
           <td>{d}</td>
         {/each}
         
        </tr>
        
        <tr>          
          {#each data.answer_line1 as d}
          <td>___</td>
          {/each}
        </tr>
        
      </table>

      {#if data.is_two_word_answer}     
      <table class="noborder paddingleft">
        <tr>
          {#each data.answer_line2 as d}
            <td>{d}</td>
          {/each}
          
         </tr>
         
         <tr>          
           {#each data.answer_line2 as d}
           <td>___</td>
           {/each}
         </tr>
      </table>
      {/if}
  
      
  <div class="filler">&nbsp;</div>
      
  
  <style>
      p {
          display: flex;
          justify-content: center;
          font-size: 48px;
          width: 1000px;
          padding-left: 120px;
      }
  
      .numericanswer_row2 {
          padding-bottom: 100px;
      }
  
     .numericanswer {
          display: flex;
          justify-content: left;    
          padding-left: 120px;
          padding-bottom: 30px;
          font-size: 24px;
     }
  
  
     .lettertable {
      padding-left: 200px;
  
      border-spacing: 0px;
     
      
      /*
      border-top: 2px solid black;
      border-bottom: 2px solid black;
      border-left: 2px solid black;
      border-right: 2px solid black;    
      */
     }
  
     .topleft {
      border-left: none !important;
      border-top: none !important;
     }
  
     .heading_top {
      border-left: 2px solid black;
      border-right: 2px solid black;
      border-top: 2px solid black;
      border-bottom: 2px solid black;    
     }
  
  
  
     .lettertable  tr {
      padding: 0
     }
  
     .lettertable td {
      /*text-align: center;*/
      font-size: 32px;
      padding: 20px;
      /*
      border-left: 2px solid black;
      border-right: 2px solid black;
      border-top: 2px solid black;
      border-bottom: 2px solid black;
      */
     }
  
     .leftcolumn {
      border-left: 4px solid black;
      font-weight: bold;
      letter-spacing: 8px;
      text-align: right;
     }
  
     .rowbottom {
      border-bottom: 4px solid black !important;
     }
  
     .lastcolumn {
      border-right: 4px solid black !important;
     }
  
     .borderleft {
      border-left: 4px solid black !important;
     }
  
     .bordertop {
      border-top: 4px solid black !important;
     }
  
     .heading{
      font-size: 32px;
      font-weight: bold;
      border-top: 4px solid black;
     }
  
     .numericanswer_row2 {
      padding-bottom: 120px;
     }
  
     .letter {
      border-left: 2px solid black;
      border-right: 2px solid black;
      border-top: 2px solid black;
      border-bottom: 2px solid black;    
     }
  
     .leftcolumn {
      border-left: 4px solid black;
      border-right: 2px solid black;
      border-top: 2px solid black;
      border-bottom: 2px solid black;      
     }
  
     .noborder td {
      border: 0px solid black;
      padding-left: 20px;
      padding-bottom: 50px;
      font-weight: bold;
      font-size: 32px;
      width: 3ch;
     }
  
     .paddingleft {
      padding-left: 120px;
     }
  
     /*
     .normaltable {
      display: block;
      
     }
     */
  
     /*
     .noborder > td {
      padding-left: 30px;
     }
     */
  
     .noborder td:nth-child(1) {
      padding-left: 0px;
     }
  
     .noborder {
      padding-bottom: 50px;
     }
  
     .borderleft {
      border-left: 4px solid black;
     }
  
  
  
  </style>