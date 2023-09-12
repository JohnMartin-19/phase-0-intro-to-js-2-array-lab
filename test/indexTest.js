require ( './helpers.js' );

describe('index.js', function () {
  describe('cats', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });

  describe('Array functions', function () {
    beforeEach(
      function c() {
      const cats = [];
      cats.length = 0;

      cats.push('Milo', 'Otis', 'Garfield');
      console.log(cats)
    });
    c();


    describe('destructivelyAppendCat(name)', function () {
      it('appends a cat to the end of the cats array', 
      function add() {
        destructivelyAppendCat('Ralph');
        cats.push('Ralph')
        console.log(cats)
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield", "Ralph"]);
      });
    });
    add();

    describe('destructivelyPrependCat(name)', function () {
      it('prepends a cat to the beginning of the cats array', 
      function prep() {
        destructivelyPrependCat("Bob");
        cats.unsift('bob')
        console.log(cats);
        expect(cats).to.have.ordered.members(["Bob", "Milo", "Otis", "Garfield"]);
      });
    });
    prep();

    describe('destructivelyRemoveLastCat()', function () {
      it('removes the last cat from the cats array', 
      function rem() {
        destructivelyRemoveLastCat();
        cats.pop();
        console.log(cats)
        expect(cats).to.have.ordered.members(["Milo", "Otis"]).and.to.not.include('Garfield');
      });
    });
    rem();

    describe('destructivelyRemoveFirstCat()', function () {
      it('removes the first cat from the cats array', 
      function remove() {
        destructivelyRemoveFirstCat();
        cats.splice(1);
        console.log(cats);
        expect(cats).to.have.ordered.members(["Otis", "Garfield"]).and.to.not.include('Milo');
      });
    });
    remove();
    describe('appendCat(name)', function () {
      it('appends a cat to the cats array and returns a new array, leaving the cats array unchanged', 
      function appendsCat() {
        expect(appendCat("Broom")).to.have.ordered.members(["Milo", "Otis", "Garfield", "Broom"]);
        newCats=cats.push('Broom');
        console.log(cats);
        console.log(newCats);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
    appendsCat();

    describe('prependCat(name)', function () {
      it('prepends a cat to the cats array and returns a new array, leaving the cats array unchanged', 
      function prependCat() {
        expect(prependCat("Arnold")).to.have.ordered.members(["Arnold", "Milo", "Otis", "Garfield"]);
        catList=cats.unshift('Arnold');
        console.log(catList);
        console.log(cats);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
      });
    });
    prependCat();
    
    describe('removeLastCat()', function () {
      it('removes the last cat in the cats array and returns a new array, leaving the cats array unchanged', 
      function rmLastCat() {
        expect(removeLastCat()).to.have.ordered.members(["Milo", "Otis"]);
        newArr = cats.slice(-1);
        console.log(newArr)

        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
        console.log(cats);
      });
    });
    rmLastCat();

    describe('removeFirstCat()', function () {
      it('removes the first cat from the cats array and returns a new array, leaving the cats array unchanged',
       function rmFirstCat() {
        expect(removeFirstCat()).to.have.ordered.members(["Otis", "Garfield"]);
        newCatList = cats.slice(1);
        console.log(newCatList);
        expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
        console.log(cats);
      });
    });
    rmFirstCat();
  });
});
