

<script type="ts">
 

  export let data;
</script>

<h1>What is it?</h1>

<h2>CLUE</h2>
<p>Almost all types of modern transport could use this invention that is used by 
squids, marine iguanas and red Galalagos crabs</p>

<h2>CODE TO BREAK</h2>
<div class="numericanswer" id="numericanswer_row1">
28 - 35 - 96
</div>
<div class="numericanswer" id="numericanswer_row2">
32 - 64 - 16 - 32 - 112 - 44 - 80 - 20 - 16 - 60
</div>

<h2> LETTER TABLE</h2>

    <table>
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


   table {
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
    border-left: none;
    border-top: none;
   }

   tr {
    padding: 0
   }

   td {
    /*text-align: center;*/
    font-size: 32px;
    padding: 20px;
    border-left: 2px solid black;
    border-right: 2px solid black;
    border-top: 2px solid black;
    border-bottom: 2px solid black;
   }

   .leftcolumn {
    border-left: 4px solid black;
    font-weight: bold;
    letter-spacing: 8px;
    text-align: right;
   }

   .rowbottom {
    border-bottom: 4px solid black;
   }

   .lastcolumn {
    border-right: 4px solid black;
   }

   .heading{
    font-size: 32px;
    font-weight: bold;
    border-top: 4px solid black;
   }

   .numericanswer_row2 {
    padding-bottom: 120px;
   }

</style>