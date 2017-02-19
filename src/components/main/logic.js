import constants from '../../constants';

export const calculator = (input1, input2, operator)=> {
  switch (operator) {
    case 'add':
      return Number(input1) + Number(input2);
      break;

    case 'subtract':
      return Number(input1) - Number(input2);
      break;

    case 'multiply':
      return Number(input1) * Number(input2);
      break;

    case 'divide':
      return Number(input1) / Number(input2);
      break;

    default:
      console.error('wrong format on one of the inputs; input1, input2, operator:', input1, input2, operator);
      return null;
  }
};