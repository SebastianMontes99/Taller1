import { Component,OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import {MatPaginator} from '@angular/material/paginator'
import {MatSort} from '@angular/material/sort'
import { NgForm } from '@angular/forms';
import { MoviesService } from 'src/app/services/movies.service';
import { Movie } from 'src/app/models/movie.model';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-movies-table',
  templateUrl: './movies-table.component.html',
  styleUrls: ['./movies-table.component.css']
})
export class MoviesTableComponent {

  @ViewChild('moviesForm',{static:false})

  moviesForm!:NgForm;
  moviesData!:Movie;
  showForm: boolean = true;

  dataSource = new MatTableDataSource();
  movies_quantity:any
  displayedColumns:string[]=['id','name','photo','duration','genres', 'actions']

  @ViewChild(MatPaginator, {static: true})
  paginator!:MatPaginator;
  isEditMode=false;

  @ViewChild(MatSort)
  sort!:MatSort;

  onSubmit()
  {
    if(this.moviesForm.form.valid)
    {
      console.log(this.moviesForm.form.value);
      if(this.isEditMode)
      {
        console.log('update!');
        this.updateMovie();
        this.getAllMovies();
        this.get_total_movies();
      }
      else
      {
        console.log('create!');
        this.addMovie();
        this.getAllMovies();
        this.get_total_movies();
      }
      this.cancelEdit();

    }
    else
    {
      console.log('Invalid data');
    }
  }

  constructor(private moviesService:MoviesService,private _snackBar: MatSnackBar) {

    this.moviesData = {} as Movie;
  }

  ngOnInit(): void{
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.getAllMovies();

  }

  activeEdit(){
    this.isEditMode=true;
    this.showForm=true;
  }

  getAllMovies()
  {
    this.moviesService.getList().subscribe((response:any)=>{
      this.dataSource.data = response
      this.movies_quantity = this.dataSource.data.length
    })
  }

  editItem(element: Movie)
  {
    this.moviesData = element;
  this.isEditMode = true;
  }

  cancelEdit(){
    this.isEditMode = false;
    this.moviesForm.resetForm();
  }

  deleteItem(id:string)
  {
    this.moviesService.deleteItem(id).subscribe((response: any)=>{
      this.dataSource.data = this.dataSource.data.filter((o:any)=>{
        return o.id !== id ? o: false;
      });
      this.movies_quantity = this.dataSource.data.length;
    });
    console.log(this.dataSource.data)
    this.openSnackBar('Pelicula eliminada con exito','OK')
  }

  addMovie()
  {
    this.moviesData.id = 0;
    this.moviesService.createItem(this.moviesData).subscribe((response:any)=>{
      this.dataSource.data.push({...response});
      this.dataSource.data = this.dataSource.data.map((o: any)=> {return 0;});
    });
    this.openSnackBar('Pelicula registrada con exito','OK')
  }

  updateMovie()
  {
    this.moviesService.udpdateItem(this.moviesData.id,this.moviesData).subscribe((response:any)=>{
      this.dataSource.data = this.dataSource.data.map((o:any) =>{
        if(o.id == response.id){
          o = response;
        }
        return 0;
      });
    });
    this.movies_quantity = this.dataSource.data.length;
    this.openSnackBar('Pelicula actualizada con exito','OK')
  }

  get_total_movies()
  {
    this.movies_quantity = this.dataSource.data.length;
  }


  /**
   * Abre la alerta de snackbar
   * @param message Mensaje a mostrar
   * @param action Acción
   */
  openSnackBar(message: string, action?: string) {
    this._snackBar.open(message, action, { duration: 5_000 ,verticalPosition:'top',horizontalPosition:'end'});
  }

}
