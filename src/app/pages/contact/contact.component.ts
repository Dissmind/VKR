import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CommentCreateDto } from './comment.create-dto'



@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  name: string = ''
  email: string = ''
  phoneNumber: string = ''
  comment: string = ''


  constructor(private http: HttpClient) {}



  submitForm() {
    const body: CommentCreateDto = {
      name: this.name,
      email: this.email,
      phoneNumber: this.phoneNumber,
      comment: this.comment,
    }

    this.http.post('http://localhost:3000/api/send-comment', body).subscribe(
      (response) => {
        console.log('Успешно', response);
      },
      (error) => {
        console.error('Ошибка при отправке:', error);
      }
    );
  }


}
