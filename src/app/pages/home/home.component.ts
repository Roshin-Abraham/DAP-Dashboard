import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  districts=[
    
    { 
    id:1,
    title:"Trivadum",
    image:"https://th.bing.com/th/id/R.63f40c641e05d41517f74f048b0beab3?rik=wk0o0F9mt6BL5w&riu=http%3a%2f%2fwww.visittnt.com%2fblog%2fwp-content%2fuploads%2f2018%2f06%2fTrivandrum-1.jpg&ehk=x%2fKJDBPxaWn0jnjN9c0y9hi5qfQvwCaZ12xi2LJu6no%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1",
    desc:"Trivandrum- State Capital"
  },
  { 
    id:2,
    title:"Kollam",
    image:"https://img.traveltriangle.com/blog/wp-content/uploads/2018/04/Jatayu%E2%80%99s-Earth-Centre-kollam-kb6592.jpg",
    desc:"Kollam Tourist Place - Jadayu"
  },
  { 
    id:3,
    title:"Thrissur",
    image:"https://th.bing.com/th/id/OIP.F3YHeSM8K8PRCU2Wpa9M_AAAAA?rs=1&pid=ImgDetMain",
    desc:"Thrissur - Temple"
  }


  ]

}
