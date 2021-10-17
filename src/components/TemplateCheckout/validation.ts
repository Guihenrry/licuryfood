import * as yup from 'yup'

export const schema = yup.object().shape({
  name: yup.string().required('Nome é obrigatorio'),
  withdrawal: yup.boolean(),
  address: yup.string().when('withdrawal', {
    is: false,
    then: yup.string().required('Endereço é obrigatorio')
  }),
  number: yup.string().when('withdrawal', {
    is: false,
    then: yup.string().required('Número é obrigatorio')
  }),
  city: yup.string().when('withdrawal', {
    is: false,
    then: yup.string().required('Cidade é obrigatorio')
  }),
  complement: yup.string(),
  note: yup.string(),
  payment_method: yup.string().required(),
  money_change: yup.string().when('payment_method', {
    is: 'Dinheiro',
    then: yup.string().required('Valor é obrigatorio para compras em dinheiro')
  })
})
