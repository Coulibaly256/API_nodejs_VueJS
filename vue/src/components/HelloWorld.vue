<template>
  <div class="hello">
    <h2 style="text-align: center;">Liste des étudiants</h2><br>
    <table class="table ">
      <thead class="thead-dark">
        <tr style="color: white; background-color: red;">
          <th scope="col">id_etudiant</th>
          <th scope="col">nom</th>
          <th scope="col">prenoms</th>
          <th scope="col">matricule</th>
          <th scope="col">motDePasse</th>
          <th scope="col">email</th>
          <th scope="col">dateNaissance</th>
        </tr>
      </thead>
      <tbody>
        <tr :key="index" v-for="(pays, index) in pays">

          <td>{{ pays.id_etudiant }} </td>
          <td>{{ pays.nom }} </td>
          <td>{{ pays.prenoms }} </td>
          <td>{{ pays.matricule }} </td>
          <td>{{ pays.email }} </td>
          <td>{{ pays.dateNaissance }} </td>

        </tr>

      </tbody>
    </table>

    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Ajouter un etudiant
    </button>

    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">Ajout d'un etudiant</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">

            <form @submit.prevent="addetud">
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">Identifiant etudiant</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                  name="id_etudiant" v-model="id_etudiant">

              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Nom etudiant</label>
                <input type="text" class="form-control" id="exampleInputPassword1" name="nom" v-model="nom">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Prenoms etudiant</label>
                <input type="text" class="form-control" id="exampleInputPassword1" name="prenoms" v-model="prenoms">
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Numéro matricule</label>
                <input type="text" class="form-control" id="exampleInputPassword1" name="matricule" v-model="matricule">
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Email</label>
                <input type="text" class="form-control" id="exampleInputPassword1" name="email" v-model="email">
              </div>

              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Date de naissance</label>
                <input type="date" class="form-control" id="exampleInputPassword1" name="dateNaissance"
                  v-model="dateNaissance">
              </div>
              <button type="submit" class="btn btn-primary" data-bs-dismiss="modal" v-on:click="addetud()">Valider</button>
            </form>
          </div>
        </div>
      </div>
    </div>




  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'HelloWord',
  data() {
    return {

      id_etudiant: "",
      nom: "",
      prenoms: "",
      matricule: "",
      email: "",
      dateNaissance: "",
      pays: null,
    }
  },
  mounted() {
    this.getData();
  },
  methods: {
    getData() {
      axios
        .get('http://localhost:3021/etudian')
        .then((reponse) => {
          this.pays = reponse.data;
          console.log(this.pays)
        });
    },
    addetud() {
      axios.post('http://localhost:3021/api/etudiants',
        {
          id_etudiant: this.id_etudiant,
          nom: this.nom,
          prenoms: this.prenoms,
          matricule: this.matricule,
          email: this.email,
          dateNaissance: this.dateNaissance
        },
      ).then(reponse => {
        console.warn(reponse);
        this.getData();
      });

    }
  },
}

</script>