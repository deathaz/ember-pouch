import DS from 'ember-data';
import { Model } from '@smart-stocker/pouch';

export default Model.extend({
  name: DS.attr('string'),
  series: DS.attr('string'),
  debut: DS.attr(),
});

