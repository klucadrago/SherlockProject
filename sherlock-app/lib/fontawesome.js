import { library } from '@fortawesome/fontawesome-svg-core';
import * as solidIcons from '@fortawesome/free-solid-svg-icons';

// Estrai tutte le icone dall'oggetto solidIcons
const icons = Object.keys(solidIcons)
  .filter((key) => key.startsWith('fa')) // Filtra solo le chiavi che iniziano con 'fa'
  .map((key) => solidIcons[key]);

// Aggiungi le icone alla libreria
library.add(...icons);