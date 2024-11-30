const products = [
  {
      id: 1,
      price: 99.50 , 
      discount: 1128.00,
      rating: 4.3,
      image: "Images/image-1 (1).jpeg",
      name: "GoPro HERO6 4K Action",
      color: "Black",
  },
  {
      id: 2,
      price: 456.50 , 
      discount: 1128.00,
      rating: 4.3,
      image: "Images/image-1 (2).jpeg",
      name: "GoPro HERO6 4K Action",
      color: "Gray",
  },
  {
      id: 3,
      price: 99.50 , 
      discount: 1128.00,
      rating: 4.3,
      image: "Images/image-1 (3).jpeg",
      name: "WGoPro HERO6 4K Action",
      color: "gray",
  },
  {
      id: 4,
      price: 99.50 , 
      discount: 1128.00,
      rating: 4.3,
      image: "Images/image-1 (4).png",
      name: "GoPro Camera 4K Action",
      color: "Black",
  },
  {
      id: 5,
      price: 99.50 , 
      discount: 1128.00,
      rating: 4.3,
      image: "Images/image-1 (5).webp",
      name: "GoPro HERO6 4K Action",
      color: "Black",
  },
  {
      id: 6,
      price: 99.50 , 
      discount: 1128.00,
      rating: 4.3,
      image: "Images/image-1 (6).jpeg",
      name: "GoPro HERO6 4K Action",
      color: "Black",
  },
  {
      id: 7,
      price: 99.50 , 
      discount: 1128.00,
      rating: 4.3,
      image: "Images/image-1 (7).jpeg",
      name: "GoPro HERO6 4K Action",
      color: "Black",
  },
  {
      id: 8,
      price: 99.50 , 
      discount: 1128.00,
      rating: 4.3,
      image: "Images/image-1 (8).png",
      name: "GoPro HERO6 4K Action",
      color: "Black",
  },
  {
      id: 9,
      price: 99.50 , 
      discount: 1128.00,
      rating: 4.3,
      image: "Images/image-1 (9).jpeg",
      name: "GoPro HERO6 4K Action",
      color: "Black",
  },
 
  {
      id: 10,
      price: 99.50 , 
      discount: 1128.00,
      rating: 4.3,
      image: "Images/image-1 (10).jpeg",
      name: "GoPro HERO6 4K Action",
      color: "Black",
  },
  {
      id: 11,
      price: 99.50 , 
      discount: 1128.00,
      rating: 4.3,
      image: "Images/image-1 (11).jpeg",
      name: "GoPro HERO6 4K Action",
      color: "Black",
  },
  {
      id: 12,
      price: 99.50 , 
      discount: 1128.00,
      rating: 4.3,
      image: "Images/image-1 (12).jpg",
      name: "GoPro HERO6 4K Action",
      color: "Black",
  },
  {
      id: 13,
      price: 99.50 , 
      discount: 1128.00,
      rating: 4.3,
      image: "Images/image-1 (13).jpeg",
      name: "GoPro HERO6 4K Action",
      color: "Black",
  },
  {
      id: 14,
      price: 99.50 , 
      discount: 1128.00,
      rating: 4.3,
      image: "Images/image-1 (14).jpeg",
      name: "GoPro HERO6 4K Action",
      color: "Black",
  },
  {
      id: 15,
      price: 99.50 , 
      discount: 1128.00,
      rating: 4.3,
      image: "Images/image-1 (15).jpeg",
      name: "GoPro HERO6 4K Action",
      color: "Black",
  },
  {
      id: 16,
      price: 99.50 , 
      discount: 1128.00,
      rating: 4.3,
      image: "Images/image-1 (16).jpeg",
      name: "GoPro HERO6 4K Action",
      color: "Black",
  },
  

];


// Mobile Menu Toggle
const hamburgerMenu = document.querySelector('.hamburger-menu');
const mobileMenu = document.getElementById('mobileMenu');

hamburgerMenu.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'block' ? 'none' : 'block';
});

// pagination
let currentPage = 1;
const productsPerPage = 8;

function renderProductList() {
  const productList = document.getElementById("product-list");
  productList.innerHTML = "";

  const start = (currentPage - 1) * productsPerPage;
  const end = currentPage * productsPerPage;
  products.slice(start, end).forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <div class="product-details">
                
                <p class="price">$${product.price} <span class="discount">$${product.discount}</span></p>
                <p class="rating">⭐⭐⭐⭐ ${product.rating}</p>
                <h5 class="product-name">${product.name}</h5>
                <p class="product-color">Color: ${product.color}</p>
                <button class="add-to-cart">Add to Cart</button>
            </div>
    `;
    card.onclick = () => {
      localStorage.setItem("product", JSON.stringify(product));
      window.location.href = "productdetail.html";
    };
    productList.appendChild(card);
  });

  document.getElementById("prev-page").disabled = currentPage === 1;
  document.getElementById("next-page").disabled = end >= products.length;
  // document.getElementById("pageInfo").textContent = `${currentPage} / ${Math.ceil(products.length / productsPerPage);
}

document.addEventListener("DOMContentLoaded", () => {
  renderProductList();
  document.getElementById("prev-page").onclick = () => {
    currentPage--;
    renderProductList();
  };
  document.getElementById("next-page").onclick = () => {
    currentPage++;
    renderProductList();
  };
});
