import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(users: any[], searchText: any): any[] {
    if (!searchText) { return users; }
    searchText = searchText.toLowerCase();
    return users.filter(user => {
      if (!(user.login).indexOf(searchText)) {
        return user;
      }
    });
  }
}
