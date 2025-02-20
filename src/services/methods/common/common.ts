const methods = {
  add<Type>(dataStructures: Type[], constructor: () => Type): Type[] {
    return [...dataStructures, constructor()];
  },

  remove<Type>(dataStructures: Type[], index: number): Type[] {
    return dataStructures.filter((ds, i) => ds && i !== index);
  },
};

export default methods;
