
<template>
    
    <div class="hello">
    <h2 style="text-align: center;">Liste des étudiants</h2><br>
      <table class="table ">
      <thead class="thead-dark">
        <tr style="color: white; background-color: red;">
          <th scope="col">id module</th>
          <th scope="col">libelle</th>
          <th scope="col">credit </th>
          <th scope="col">coefficient</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(pays, index) in pays">
          
          <td>{{ pays.id_module}} </td>
          <td>{{ pays.libelle}} </td>
          <td>{{ pays.credit}} </td>
          <td>{{ pays.coefficient}} </td>
          
    
        </tr>
        
      </tbody>
    </table>
    
    
    
    
    </div>
    </template>
    
    <script>
    import axios from 'axios'
    
    export default {
     name:'moduleView',
     data(){
      return{
        pays:null,
      }
     },
     mounted(){
      axios
      .get('http://localhost:3001/module')
      .then((reponse) => {
        this.pays=reponse.data;
        console.log(this.pays)
      });
     },
    }
     
    </script>