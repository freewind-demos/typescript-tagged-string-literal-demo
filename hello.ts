function myStr(strs: TemplateStringsArray, name: string) {
  return strs[0] + name.toUpperCase() + strs[1];
}

console.log(myStr`Hello, ${'javascript'}!`);
