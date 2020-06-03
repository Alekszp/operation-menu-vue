import { v4 as uuidv4 } from 'uuid';

const monthsEnum = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
}

const monthsNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',  'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']

const operationsCollection = [
  {
    month: monthsEnum.June,
    days: [{
        day: 10,
        operations: [{
            companyName: 'ЧП Бирюков Михаил Алексеевич',
            fromAccount: 'monobank',
            target: 'Сайт Volkswagen',
            action: 'Продвижение',
            description: 'Оплата за продвижение Google Adwords июнь-июль',
            paymentStaus: 'Оплачено',
            amount: 21239,
            currency: 'UAH',
            trend: 'up'
          },
          {
            companyName: 'Роман Мельников',
            fromAccount: 'monobank',
            target: 'ЧП Electron',
            action: 'Зарплата сотрудникам',
            description: 'Аванс июль',
            paymentStaus: 'Оплачено',
            amount: 56000,
            currency: 'UAH',
            trend: 'down'
          },
          {
            companyName: 'ООО Кранкомплект',
            fromAccount: 'monobank',
            target: 'Сайт Кранкомплект',
            action: 'разработка',
            description: 'Аванс за разработку',
            paymentStaus: 'Оплачено',
            amount: 170000,
            currency: 'UAH',
            trend: 'up'
          },
        ]
      },
      {
        day: 9,
        operations: [{
            companyName: 'Роман Мельников',
            fromAccount: 'monobank',
            target: 'Обучение сотрудников',
            action: 'Расходьі на офис',
            description: 'Оплата обучения',
            paymentStaus: 'Оплачено',
            amount: 8000,
            currency: 'UAH',
            trend: 'down'
          },
          {
            companyName: 'ООО Кранкомплект',
            fromAccount: 'monobank',
            target: 'Сайт Кранкомплект',
            action: 'разработка',
            description: 'Аванс за разработку',
            paymentStaus: 'Оплачено',
            amount: 170000,
            currency: 'UAH',
            trend: 'up'
          },
          {
            companyName: 'ЧП Бирюков Михаил Алексеевич',
            fromAccount: 'monobank',
            target: 'Сайт Volkswagen',
            action: 'Продвижение',
            description: 'Оплата за продвижение Google Adwords июнь-июль',
            paymentStaus: 'Оплачено',
            amount: 21239,
            currency: 'UAH',
            trend: 'up'
          },
        ]
      },
      {
        day: 8,
        operations: [{
            companyName: 'Роман Мельников',
            fromAccount: 'monobank',
            target: 'Обучение сотрудников',
            action: 'Расходьі на офис',
            description: 'Оплата обучения',
            paymentStaus: 'Оплачено',
            amount: 1000000,
            currency: 'UAH',
            trend: 'up'
          },
          {
            companyName: 'ООО Кранкомплект',
            fromAccount: 'monobank',
            target: 'Сайт Кранкомплект',
            action: 'разработка',
            description: 'Аванс за разработку',
            paymentStaus: 'Оплачено',
            amount: 1700,
            currency: 'UAH',
            trend: 'down'
          },
          {
            companyName: 'ЧП Бирюков Михаил Алексеевич',
            fromAccount: 'monobank',
            target: 'Сайт Volkswagen',
            action: 'Продвижение',
            description: 'Оплата за продвижение Google Adwords июнь-июль',
            paymentStaus: 'Оплачено',
            amount: 15000,
            currency: 'UAH',
            trend: 'down'
          },
        ]
      }
    ]
  },
  {
    month: monthsEnum.July,
    days: [{
        day: 20,
        operations: [{
            companyName: 'ЧП Бирюков Михаил Алексеевич',
            fromAccount: 'monobank',
            target: 'Сайт Volkswagen',
            action: 'Продвижение',
            description: 'Оплата за продвижение Google Adwords июнь-июль',
            paymentStaus: 'Оплачено',
            amount: 21239,
            currency: 'UAH',
            trend: 'up'
          },
          {
            companyName: 'Роман Мельников',
            fromAccount: 'monobank',
            target: 'ЧП Electron',
            action: 'Зарплата сотрудникам',
            description: 'Аванс июль',
            paymentStaus: 'Оплачено',
            amount: 56000,
            currency: 'UAH',
            trend: 'down'
          },
          {
            companyName: 'ООО Кранкомплект',
            fromAccount: 'monobank',
            target: 'Сайт Кранкомплект',
            action: 'разработка',
            description: 'Аванс за разработку',
            paymentStaus: 'Оплачено',
            amount: 170000,
            currency: 'UAH',
            trend: 'up'
          },
        ]
      },
      {
        day: 19,
        operations: [{
            companyName: 'Роман Мельников',
            fromAccount: 'monobank',
            target: 'Обучение сотрудников',
            action: 'Расходьі на офис',
            description: 'Оплата обучения',
            paymentStaus: 'Оплачено',
            amount: 8000,
            currency: 'UAH',
            trend: 'down'
          },
          {
            companyName: 'ООО Кранкомплект',
            fromAccount: 'monobank',
            target: 'Сайт Кранкомплект',
            action: 'разработка',
            description: 'Аванс за разработку',
            paymentStaus: 'Оплачено',
            amount: 170000,
            currency: 'UAH',
            trend: 'up'
          },
          {
            companyName: 'ЧП Бирюков Михаил Алексеевич',
            fromAccount: 'monobank',
            target: 'Сайт Volkswagen',
            action: 'Продвижение',
            description: 'Оплата за продвижение Google Adwords июнь-июль',
            paymentStaus: 'Оплачено',
            amount: 21239,
            currency: 'UAH',
            trend: 'up'
          },
        ]
      },
      {
        day: 18,
        operations: [{
            companyName: 'Роман Мельников',
            fromAccount: 'monobank',
            target: 'Обучение сотрудников',
            action: 'Расходьі на офис',
            description: 'Оплата обучения',
            paymentStaus: 'Оплачено',
            amount: 1000000,
            currency: 'UAH',
            trend: 'up'
          },
          {
            companyName: 'ООО Кранкомплект',
            fromAccount: 'monobank',
            target: 'Сайт Кранкомплект',
            action: 'разработка',
            description: 'Аванс за разработку',
            paymentStaus: 'Оплачено',
            amount: 1700,
            currency: 'UAH',
            trend: 'down'
          },
          {
            companyName: 'ЧП Бирюков Михаил Алексеевич',
            fromAccount: 'monobank',
            target: 'Сайт Volkswagen',
            action: 'Продвижение',
            description: 'Оплата за продвижение Google Adwords июнь-июль',
            paymentStaus: 'Оплачено',
            amount: 15000,
            currency: 'UAH',
            trend: 'down'
          },
        ]
      }
    ]
  },
  {
    month: monthsEnum.August,
    days: [{
        day: 15,
        operations: [{
            companyName: 'ЧП Бирюков Михаил Алексеевич',
            fromAccount: 'monobank',
            target: 'Сайт Volkswagen',
            action: 'Продвижение',
            description: 'Оплата за продвижение Google Adwords июнь-июль',
            paymentStaus: 'Оплачено',
            amount: 21239,
            currency: 'UAH',
            trend: 'up'
          },
          {
            companyName: 'Роман Мельников',
            fromAccount: 'monobank',
            target: 'ЧП Electron',
            action: 'Зарплата сотрудникам',
            description: 'Аванс июль',
            paymentStaus: 'Оплачено',
            amount: 56000,
            currency: 'UAH',
            trend: 'down'
          },
          {
            companyName: 'ООО Кранкомплект',
            fromAccount: 'monobank',
            target: 'Сайт Кранкомплект',
            action: 'разработка',
            description: 'Аванс за разработку',
            paymentStaus: 'Оплачено',
            amount: 170000,
            currency: 'UAH',
            trend: 'up'
          },
        ]
      },
      {
        day: 14,
        operations: [{
            companyName: 'Роман Мельников',
            fromAccount: 'monobank',
            target: 'Обучение сотрудников',
            action: 'Расходьі на офис',
            description: 'Оплата обучения',
            paymentStaus: 'Оплачено',
            amount: 8000,
            currency: 'UAH',
            trend: 'down'
          },
          {
            companyName: 'ООО Кранкомплект',
            fromAccount: 'monobank',
            target: 'Сайт Кранкомплект',
            action: 'разработка',
            description: 'Аванс за разработку',
            paymentStaus: 'Оплачено',
            amount: 170000,
            currency: 'UAH',
            trend: 'up'
          },
          {
            companyName: 'ЧП Бирюков Михаил Алексеевич',
            fromAccount: 'monobank',
            target: 'Сайт Volkswagen',
            action: 'Продвижение',
            description: 'Оплата за продвижение Google Adwords июнь-июль',
            paymentStaus: 'Оплачено',
            amount: 21239,
            currency: 'UAH',
            trend: 'up'
          },
        ]
      },
      {
        day: 13,
        operations: [{
            companyName: 'Роман Мельников',
            fromAccount: 'monobank',
            target: 'Обучение сотрудников',
            action: 'Расходьі на офис',
            description: 'Оплата обучения',
            paymentStaus: 'Оплачено',
            amount: 1000000,
            currency: 'UAH',
            trend: 'up'
          },
          {
            companyName: 'ООО Кранкомплект',
            fromAccount: 'monobank',
            target: 'Сайт Кранкомплект',
            action: 'разработка',
            description: 'Аванс за разработку',
            paymentStaus: 'Оплачено',
            amount: 1700,
            currency: 'UAH',
            trend: 'down'
          },
          {
            companyName: 'ЧП Бирюков Михаил Алексеевич',
            fromAccount: 'monobank',
            target: 'Сайт Volkswagen',
            action: 'Продвижение',
            description: 'Оплата за продвижение Google Adwords июнь-июль',
            paymentStaus: 'Оплачено',
            amount: 15000,
            currency: 'UAH',
            trend: 'down'
          },
        ]
      }
    ]
  },
]

function setUUID(){
  operationsCollection.forEach(month=>{
    month.days.forEach(day=>{
      day.operations.forEach(operation=>{
        Object.assign(operation, {id: uuidv4()})
      })
    })
  })
}

setUUID()

export {
  operationsCollection,
  monthsEnum,
  monthsNames
}