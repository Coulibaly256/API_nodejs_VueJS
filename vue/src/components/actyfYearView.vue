<template>
    <div class="hello">
    <h2 style="text-align: center;">Liste des étudiants</h2><br>
      <table class="table ">
      <thead class="thead-dark">
        <tr style="color: white; background-color: red;">
          <th scope="col">id year</th>
          <th scope="col">id niveau</th>
          <th scope="col">promo</th>
          <th scope="col">groupe</th>
          <th scope="col">id etudiant</th>
         
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(pays, index) in pays">
          
          <td>{{ pays.id_ay}} </td>
          <td>{{ pays.id_niveau}} </td>
          <td>{{ pays.promo}} </td>
          <td>{{ pays.groupe}} </td>
          <td>{{ pays.id_etudiant}} </td>

    
        </tr>
        
      </tbody>
    </table>
    
    
    <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">Ajout d'une année</h1>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">

        <form  method="POST" action="/actif">
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Identifiant de l'année</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="idanne" v-model="idanne">
    
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label" >Identifiant niveau</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="idniv" v-model="idniv">
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Promotion</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="promo" v-model="promo">
  </div>

  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">groupe</label>
    <input type="number" class="form-control" id="exampleInputPassword1" name="group" v-model="group"> 
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Identifiant etudiant</label>
    <input type="text" class="form-control" id="exampleInputPassword1" name="etudiant" v-model="etudiant">
  </div>
  <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="addactify()">Valider</button>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>  
    </div>
    </template>
    
    <script>
    import axios from 'axios'
    
    export default {
     data(){
      return{
        pays:"",
        id_ay:"",
        id_niveau:"",
        promo:"",
        groupe:12,
        id_etudiant:""
      };

     },
     mounted(){
      axios
      .get('http://localhost:3001/actif')
      .then((reponse) => {
        this.pays=reponse.data;
        console.log(this.pays)
      });
     },

     methods:{
      async addactify(){
        let result = await axios.post('http://localhost:3001/actif',{
          id_ay:this.idanne,
          id_niveau:this.idniv,
         promo:this.promo,
         groupe:this.group,
         id_etudiant:this.etudiant

         });
        console.warn(result)
      },

     },
    };
     
    </script>