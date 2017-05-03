import {Injectable} from "@angular/core";
@Injectable()
export class LangService {
  lang: any = {
    zh: {
      'male': '男',
      'female': '女',
      'other': '未知'
    },
    en: {
      'male': 'male',
      'female': 'female',
      'other': 'unknown'
    }
  }
}
