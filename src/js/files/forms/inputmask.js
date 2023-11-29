/* Маски для полей (в работе) */

// Подключение функционала "Чертоги Фрилансера"
// Подключение списка активных модулей
import { flsModules } from "../modules.js";

// Подключение модуля
import "inputmask/dist/inputmask.min.js";

const inputMask = document.getElementById('phoneNumber');
if (inputMask) {
	flsModules.inputmask = Inputmask({
    mask: '+7 (999) 999-99-99',
    placeholder: '_',
  }).mask(inputMask);
}
