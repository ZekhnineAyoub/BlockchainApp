pragma solidity ^0.5.0;

contract Marketplace {
    string public name;

    uint public productCount=0;
    mapping(uint => Product) public products;


    struct Product{
        uint id;
        string name;
        uint price;
        address payable owner;
        bool purchased;
    }

   /* event ProductCreated(
        uint id,
        string name,
        uint price,
        address owner,
        bool purchased

    );*/

    constructor() public {
        name = "Dapp University Marketplace";
    }


    function createProduct(string memory _name, uint _price) public {

    //require a valid name
    // require a valid price
    require(bytes(_name).length>0);
    require(_price >0);


      productCount ++ ;

      products[productCount]= Product(productCount,_name,_price,msg.sender,false);

    }

    function purshaseProduct(uint _id) public payable{
        //fetch the product 
        Product memory _product  = products[_id];
        //fetch the owner 
        address  payable _seller = _product.owner;
        //make sure the product is valid
        require(_product.id>0 &&  _product.id<= productCount);
        //require that there is enough ether in the transaction
        require(msg.value>= _product.price);
        //require that product has not been purchased already
        require(!_product.purchased);
        //require that the buyer is not the seller
        require(_seller!=msg.sender);
        //trasfer owenership to the buyer
        _product.owner = msg.sender;
        //Mark as purchased 
        _product.purchased = true;
        //update the product
        products[_id]= _product;
        //Pay the seller by sending them ether
        address(_seller).transfer(msg.value);

    }

}  