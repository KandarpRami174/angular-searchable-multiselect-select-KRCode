import { Component, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'select-custom-trigger-example',
  templateUrl: 'select-custom-trigger-example.html',
  styleUrls: ['select-custom-trigger-example.css'],
})
export class SelectCustomTriggerExample {
  @ViewChild('search') searchTextBox: ElementRef;

  selectFormControl = new FormControl();
  searchTextboxControl = new FormControl();
  selectedValues = [];
  data: string[] = [
    'Air Conditioners',
    'Air Coolers',
    'Antiseptic creams/liquids',
    'Artificial Sweeteners',
    'Associations/social/cultural Org',
    'Auto-auto Accessories',
    'Auto-automotive Batteries',
    'Auto-cars',
    'Auto-commercial Vehicles',
    'Auto-corporate',
    'Auto-other Auto Prod&serv',
    'Auto-tractors',
    'Auto-two Wheelers',
    'Auto-tyres',
    'Av Auxiliaries',
    'Baby Foods',
    'Banking-anywhere Banking',
    'Banking-retail Banking',
    'Banking-services & Products',
    'Bicycles',
    'Biscuits',
    'Bldg/indus/land Mat-corporate',
    'Branded atta',
    'Branded Jewellery',
    'Breakfast Cereals',
    'Building Materials/systems',
    'Cake/pastry/bread',
    'Cellular Phone Service',
    'Cellular Phones-smart Phones',
    'Cement',
    'Channel Imagery',
    'Chocolates',
    'Cleansing Tissues',
    'Coffee',
    'Condoms',
    'Consumer Durables/home Appliances',
    'Corporate-sports',
    'Corporate/brand Image',
    'Cough Lozenges',
    'Credit Cards',
    'Detergent cakes/bars',
    'Digestives',
    'Dishwashers',
    'Drycells',
    'Dth Service Providers',
    'Ecom-auto Products&services',
    'Ecom-clothing/textile/fashion',
    'Ecom-financial Services',
    'Ecom-food/grocery',
    'Ecom-gaming',
    'Ecom-jobs',
    'Ecom-matrimonials',
    'Ecom-media/entertainment/social Media',
    'Ecom-online Shopping',
    'Ecom-other Services',
    'Ecom-pharma/healthcare',
    'Ecom-real Estate',
    'Ecom-travel & Tourism',
    'Ecom-wallets',
    'Edible Oil',
    'Educ-coaching Centre/comp Exam',
    'Educ-ecom-education',
    'Educ-multiple Courses',
    'Educ-other Courses',
    'Electrical Switches/parts',
    'Energy Drink',
    'Events-others',
    'Eyewear-lenses',
    'Face Wash',
    'Facepack/astringents/clean M',
    'Fairness Creams',
    'Fans',
    'Fast Food Outlets',
    'FEED MISS',
    'Filler',
    'Film Trailor',
    'Financial Inst-corporate',
    'Fmcg-corporate',
    'Food & Beverages',
    'Food Products Range',
    'Footwear',
    'FOREX SERVICES',
    'Furniture Related Items',
    'Furnitures',
    'Glucose Powders',
    'Hair Care Range',
    'Hair Dyes',
    'Hair Oils',
    'Hair Removers',
    'Hand Sanitizers',
    'Honey',
    'Hosiery',
    'Hospital/clinics',
    'Hotels',
    'Household Cleaners',
    'Household Ups & Inverter Batteries',
    'Ice Cream/frozen Desserts',
    'Industrial Equipments/Products/B2B',
    'Instant Mix',
    'Insurance Gen-Health/Accidents',
    'Insurance-Life',
    'Internet Service Providers',
    'Inverters',
    'It-corporate',
    'Kitchen Chimneys',
    'Laptops/notebooks',
    'Lifestyle',
    'Lighting Products',
    'Liquor',
    'Liquor-beer',
    'Loans-housing/construction',
    'Lubricants',
    'Medicated Skin Treatment',
    'Microwave Ovens',
    'Milk',
    'Milk Beverages',
    'Milk Powder/condensed Milk',
    'Mineral Water',
    'MISCELLANEOUS',
    'Moisturising Lotion/creams',
    'Mutual Funds',
    'Namkin',
    'NBFCS-Corporate',
    'Non Stick Cookwares',
    'Noodles/pasta',
    'Optical Products Range',
    'Oral Hygiene Range',
    'Otc Products Range',
    'Paints',
    'Pan Masala /zarda /gutkha',
    'Perfumes/deodorant',
    'PETROLEUM PRODUCTS-CORPORATE',
    'PIPES/PVC FITTINGS',
    'Power Backup Systems',
    'Pressure Cookers/electrical Cookers',
    'Prickly Heat Powders/lotions',
    'Promo Branded Multiple Program',
    'Promo Channel Properties',
    'Promo Channel/brand',
    'Promo Program',
    'Promo Tag',
    'Protective Coatings',
    'Readymade Garments',
    'Refrigerators',
    'Retail Outlets-clothing/textiles/fashion',
    'Retail Outlets-departmental Stores',
    'Retail Outlets-electronics/durables',
    'Retail Outlets-jewellers',
    'Retail Outlets-optical',
    'Roofings',
    'Rubs And Balms',
    'Sanitary Napkins',
    'Sauce/ketchup',
    'Securities/sharebroking Orgn',
    'Sewing/knitting Machines',
    'Shampoos',
    'Shaving Creams/Lotion',
    'Shaving Foam',
    'Shaving System/razor',
    'Short Program',
    'Social Advertisements-govt',
    'Social Advertisements-ngos',
    'Soft Drink Aerated',
    'Soft Drink Non Aerated',
    'Solar Products Range',
    'Squashes/cordials/syrups',
    'Sugar',
    'Suitings',
    'Surgical Goods/equipments',
    'Sweets/other Milk Products',
    'Talcum Powders',
    'Televisions',
    'Toilet Liquids',
    'Toilet Soaps',
    'Toilet/floor Cleaners',
    'Toiletries Range',
    'Tooth Brushes',
    'Tooth Pastes',
    'Transport',
    'Vitamins/Tonics/Health Supplem',
    'Wafer/chips',
    'Washing Machines',
    'Washing Powders/liquids',
    'Watches',
    'Water Purifiers/filters',
    'Wearable Devices',
    'Winter Wear',
    'Wires & Cables',
    'Writing Instruments',
  ];

  filteredOptions: Observable<any[]>;

  ngOnInit() {
    /**
     * Set filter event based on value changes
     */
    this.filteredOptions = this.searchTextboxControl.valueChanges.pipe(
      startWith<string>(''),
      map((name) => this._filter(name))
    );
  }

  /**
   * Used to filter data based on search input
   */
  private _filter(name: string): String[] {
    const filterValue = name.toLowerCase();
    // Set selected values to retain the selected checkbox state
    this.setSelectedValues();
    this.selectFormControl.patchValue(this.selectedValues);
    let filteredList = this.data.filter(
      (option) => option.toLowerCase().indexOf(filterValue) === 0
    );
    console.log(filteredList);
    return filteredList;
  }

  /**
   * Remove from selected values based on uncheck
   */
  selectionChange(event) {
    if (event.isUserInput && event.source.selected == false) {
      let index = this.selectedValues.indexOf(event.source.value);
      this.selectedValues.splice(index, 1);
    }
  }

  openedChange(e) {
    // Set search textbox value as empty while opening selectbox
    this.searchTextboxControl.patchValue('');
    // Focus to search textbox while clicking on selectbox
    if (e == true) {
      this.searchTextBox.nativeElement.focus();
    }
  }

  /**
   * Clearing search textbox value
   */
  clearSearch(event) {
    event.stopPropagation();
    this.searchTextboxControl.patchValue('');
  }

  /**
   * Set selected values to retain the state
   */
  setSelectedValues() {
    console.log('selectFormControl', this.selectFormControl.value);
    if (
      this.selectFormControl.value &&
      this.selectFormControl.value.length > 0
    ) {
      this.selectFormControl.value.forEach((e) => {
        if (this.selectedValues.indexOf(e) == -1) {
          this.selectedValues.push(e);
        }
      });
    }
  }
}
/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
