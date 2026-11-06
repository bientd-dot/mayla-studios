/**
 * MAYLA STUDIOS - Bio Storefront JavaScript
 * Pure Vanilla JS, responsive & lightweight
 */

// PRODUCT DATABASE (Aesthetic pieces inspired by @mayla.studios)
// Supports local images (images/sp1.jpg, images/sp2.jpg...) with smart fallback
const PRODUCTS = [
  {
    id: 1,
    name: "Rosé Silk Midi Dress - Đầm Lụa Thắt Nơ Lưng",
    category: "dresses",
    price: 495000,
    originalPrice: 590000,
    discount: "-16%",
    badge: "HOT",
    image: "images/sp1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80",
    desc: "Đầm dáng midi may trên nền lụa ngọc trai mềm mát không nhăn, thiết kế chiết eo tôn dáng cùng chi tiết cut-out nhẹ tinh tế sau lưng. Rất thích hợp cho những buổi tiệc trà, sinh nhật hay du lịch.",
    shopeeUrl: "https://shopee.vn",
    instaUrl: "https://www.instagram.com/mayla.studios/",
    sold: 842,
    rating: 5.0,
    reviews: 189
  },
  {
    id: 2,
    name: "Aurelia Tweed Set - Set Áo Tweed Phối Chân Váy Chữ A",
    category: "sets",
    price: 680000,
    originalPrice: 850000,
    discount: "-20%",
    badge: "BEST",
    image: "images/sp2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80",
    desc: "Set dạ tweed dệt sợi kim tuyến ánh nhẹ sang trọng, viền chỉ tết thủ công. Phom áo croptop vừa vặn tôn vòng eo phối cùng chân váy chữ A kèm quần bảo hộ bên trong tiện lợi.",
    shopeeUrl: "https://shopee.vn",
    instaUrl: "https://www.instagram.com/mayla.studios/",
    sold: 630,
    rating: 4.9,
    reviews: 135
  },
  {
    id: 3,
    name: "Clara Chiffon Blouse - Áo Voan Tơ Cổ Bèo Pháp",
    category: "tops",
    price: 360000,
    originalPrice: 420000,
    discount: "-14%",
    badge: "NEW",
    image: "images/sp3.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1564257631407-4deb129f042b?auto=format&fit=crop&w=700&q=80",
    desc: "Áo sơ mi voan tơ Hàn Quốc mềm rũ, tay phồng bo chun nhẹ phối cổ xếp bèo nữ tính. Mix cùng chân váy midi hoặc quần tây ống suông đi làm đều vô cùng trang nhã.",
    shopeeUrl: "https://shopee.vn",
    instaUrl: "https://www.instagram.com/mayla.studios/",
    sold: 512,
    rating: 4.9,
    reviews: 98
  },
  {
    id: 4,
    name: "Daisy Muse Dress - Đầm Voan Hoa Nhí Cổ Vuông",
    category: "dresses",
    price: 450000,
    originalPrice: 520000,
    discount: "-13%",
    badge: "HOT",
    image: "images/sp4.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80",
    desc: "Họa tiết hoa cúc nhí pastel cổ điển ngọt ngào trên nền vải chiffon lót lụa habutai êm mềm. Phần ngực may nhún co giãn ôm sát tôn vòng một tự nhiên.",
    shopeeUrl: "https://shopee.vn",
    instaUrl: "https://www.instagram.com/mayla.studios/",
    sold: 1100,
    rating: 5.0,
    reviews: 260
  },
  {
    id: 5,
    name: "Parisian Linen Blazer - Áo Vest Nữ Phom Suông Tone Be",
    category: "outers",
    price: 590000,
    originalPrice: 720000,
    discount: "-18%",
    badge: "SALE",
    image: "images/sp5.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80",
    desc: "Chất liệu linen tưng cao cấp đã qua xử lý hạn chế nhăn tối đa. Thiết kế 2 hàng khuy cổ điển, đệm vai mỏng tạo phom chuẩn chỉnh thanh lịch cho nàng công sở.",
    shopeeUrl: "https://shopee.vn",
    instaUrl: "https://www.instagram.com/mayla.studios/",
    sold: 430,
    rating: 4.8,
    reviews: 82
  },
  {
    id: 6,
    name: "Flora Pleated Skirt - Chân Váy Xếp Ly Dáng Dài Cao Cấp",
    category: "bottoms",
    price: 380000,
    originalPrice: 450000,
    discount: "-15%",
    badge: "NEW",
    image: "images/sp6.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?auto=format&fit=crop&w=700&q=80",
    desc: "Chân váy xếp ly nhỏ dập nhiệt công nghệ cao không bị mất nếp sau khi giặt. Cạp chun co giãn dễ chịu, độ xòe vừa phải tôn dáng thon gọn.",
    shopeeUrl: "https://shopee.vn",
    instaUrl: "https://www.instagram.com/mayla.studios/",
    sold: 375,
    rating: 4.9,
    reviews: 74
  },
  {
    id: 7,
    name: "Grace Satin Camisole Dress - Váy Lụa Hai Dây Xẻ Tà",
    category: "dresses",
    price: 460000,
    originalPrice: 550000,
    discount: "-16%",
    badge: "HOT",
    image: "images/sp7.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=700&q=80",
    desc: "Váy 2 dây quai mảnh tinh xảo, đường cắt bias ôm lượn theo đường cong cơ thể. Chi tiết xẻ tà một bên khéo léo tạo hiệu ứng kéo dài đôi chân.",
    shopeeUrl: "https://shopee.vn",
    instaUrl: "https://www.instagram.com/mayla.studios/",
    sold: 920,
    rating: 5.0,
    reviews: 215
  },
  {
    id: 8,
    name: "Minimalist High-waist Pants - Quần Tây Cạp Cao Xếp Ly",
    category: "bottoms",
    price: 420000,
    originalPrice: 490000,
    discount: "-14%",
    badge: "BEST",
    image: "images/sp8.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=700&q=80",
    desc: "Quần âu ống suông rộng chất chéo Ý đứng phom, lưng cao ôm gọn bụng dưới, hack chân cực đỉnh khi kết hợp cùng giày cao gót hoặc sneaker trắng.",
    shopeeUrl: "https://shopee.vn",
    instaUrl: "https://www.instagram.com/mayla.studios/",
    sold: 670,
    rating: 4.9,
    reviews: 140
  },
  {
    id: 9,
    name: "Cozy Ribbed Knit Set - Set Áo Len Tăm & Chân Váy Bút Chì",
    category: "sets",
    price: 520000,
    originalPrice: 650000,
    discount: "-20%",
    badge: "SALE",
    image: "images/sp9.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1485968579580-b6d095142e6e?auto=format&fit=crop&w=700&q=80",
    desc: "Set len dệt kim sợi organic co giãn 4 chiều mềm mịn không ngứa dặm. Gam màu be sữa ấm áp, tôn da và cực kỳ dễ phối đồ thu đông.",
    shopeeUrl: "https://shopee.vn",
    instaUrl: "https://www.instagram.com/mayla.studios/",
    sold: 290,
    rating: 4.8,
    reviews: 65
  },
  {
    id: 10,
    name: "Off-shoulder Linen Top - Áo Trễ Vai Vải Tơ Thêu Nổi",
    category: "tops",
    price: 340000,
    originalPrice: 390000,
    discount: "-12%",
    badge: "NEW",
    image: "images/sp10.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=700&q=80",
    desc: "Thiết kế trễ vai khoe xương quai xanh quyến rũ, chất vải tơ xước thêu hoa cành tinh xảo. Bo chun tay áo bồng bềnh như mây.",
    shopeeUrl: "https://shopee.vn",
    instaUrl: "https://www.instagram.com/mayla.studios/",
    sold: 410,
    rating: 4.9,
    reviews: 88
  }
];

// CATEGORIES CONFIG
const CATEGORIES = [
  { id: 'all', name: 'Tất cả', icon: 'ph-sparkle' },
  { id: 'dresses', name: 'Đầm & Váy', icon: 'ph-dress' },
  { id: 'sets', name: 'Set Đồ & Tweed', icon: 'ph-t-shirt' },
  { id: 'tops', name: 'Áo Kiểu & Sơ Mi', icon: 'ph-flower' },
  { id: 'outers', name: 'Áo Khoác & Blazer', icon: 'ph-coat-hanger' },
  { id: 'bottoms', name: 'Chân Váy & Quần', icon: 'ph-scissors' },
];

// STATE
let activeCategory = 'all';
let searchQuery = '';
let activeBadge = null;
let currentSort = 'featured';
let wishlist = JSON.parse(localStorage.getItem('mayla_wishlist') || '[]');

// DOM ELEMENTS
const productGrid = document.getElementById('product-grid');
const categoryPillsContainer = document.getElementById('category-pills');
const searchInput = document.getElementById('search-input');
const searchClearBtn = document.getElementById('search-clear');
const sortSelect = document.getElementById('sort-select');
const productCountEl = document.getElementById('product-count');
const emptyStateEl = document.getElementById('empty-state');
const wishlistBadgeEl = document.getElementById('wishlist-badge');

// Modal Elements
const productModal = document.getElementById('product-modal');
const modalCloseBtn = document.getElementById('modal-close');
const modalImg = document.getElementById('modal-img');
const modalBadge = document.getElementById('modal-badge');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalOriginalPrice = document.getElementById('modal-original-price');
const modalDiscount = document.getElementById('modal-discount');
const modalDesc = document.getElementById('modal-desc');
const modalShopeeLink = document.getElementById('modal-shopee-link');
const modalInstaLink = document.getElementById('modal-insta-link');

// Toast
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');

// FORMAT CURRENCY
function formatVND(amount) {
  return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

// SHOW TOAST
function showToast(msg) {
  toastMessage.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// INITIALIZE CATEGORY PILLS
function renderCategoryPills() {
  categoryPillsContainer.innerHTML = CATEGORIES.map(cat => `
    <button class="cat-pill flex-shrink-0 px-3.5 py-1.5 rounded-full border border-stone-200/90 text-stone-700 font-medium transition active:scale-95 ${activeCategory === cat.id ? 'active' : 'bg-white hover:border-stone-400'}"
            onclick="setCategory('${cat.id}')">
      ${cat.name}
    </button>
  `).join('');
}

// FILTER BADGE HELPER
window.filterByBadge = function(badgeKey) {
  if (badgeKey === 'ALL') {
    activeBadge = null;
  } else {
    activeBadge = badgeKey;
  }
  renderProducts();
};

// SET CATEGORY
window.setCategory = function(catId) {
  activeCategory = catId;
  renderCategoryPills();
  renderProducts();
};

// RESET ALL FILTERS
window.resetFilters = function() {
  activeCategory = 'all';
  searchQuery = '';
  activeBadge = null;
  currentSort = 'featured';
  searchInput.value = '';
  searchClearBtn.classList.add('hidden');
  sortSelect.value = 'featured';
  renderCategoryPills();
  renderProducts();
};

// GET FILTERED AND SORTED PRODUCTS
function getFilteredProducts() {
  let list = PRODUCTS.filter(item => {
    // Category match
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    
    // Search query match (name, desc, category)
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q || 
      item.name.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);

    // Badge filter
    const matchBadge = !activeBadge || item.badge === activeBadge;

    return matchCat && matchSearch && matchBadge;
  });

  // Sorting
  if (currentSort === 'price-low') {
    list.sort((a, b) => a.price - b.price);
  } else if (currentSort === 'price-high') {
    list.sort((a, b) => b.price - a.price);
  } else if (currentSort === 'name') {
    list.sort((a, b) => a.name.localeCompare(b.name));
  }

  return list;
}

// BADGE STYLING CLASS
function getBadgeClass(badge) {
  switch (badge) {
    case 'HOT': return 'badge-hot';
    case 'NEW': return 'badge-new';
    case 'BEST': return 'badge-best';
    case 'SALE': return 'badge-sale';
    default: return 'bg-stone-900 text-white';
  }
}

// RENDER PRODUCTS
function renderProducts() {
  const filtered = getFilteredProducts();

  // Update counter
  productCountEl.textContent = `${filtered.length} thiết kế có sẵn`;

  if (filtered.length === 0) {
    productGrid.innerHTML = '';
    emptyStateEl.classList.remove('hidden');
    return;
  }

  emptyStateEl.classList.add('hidden');

  productGrid.innerHTML = filtered.map(item => {
    const isWishlisted = wishlist.includes(item.id);
    return `
      <div class="product-card bg-white rounded-2xl overflow-hidden border border-stone-200/70 shadow-xs flex flex-col justify-between cursor-pointer group"
           onclick="openModal(${item.id})">
        
        <!-- Image & Tags Container with smart fallback -->
        <div class="img-container relative aspect-[3/4] overflow-hidden bg-stone-100">
          <img src="${item.image}" 
               onerror="this.onerror=null; this.src='${item.fallbackImage}'"
               alt="${item.name}" 
               loading="lazy" 
               class="w-full h-full object-cover">
          
          <!-- Badge -->
          <div class="absolute top-2.5 left-2.5 flex flex-col gap-1 items-start">
            <span class="px-2 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase ${getBadgeClass(item.badge)} shadow-xs">
              ${item.badge}
            </span>
          </div>

          <!-- Wishlist Heart Button -->
          <button onclick="event.stopPropagation(); toggleWishlist(${item.id})" 
                  class="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 backdrop-blur text-stone-600 hover:text-rose-500 flex items-center justify-center shadow-xs transition active:scale-90">
            <i class="${isWishlisted ? 'ph-fill ph-heart text-rose-500' : 'ph ph-heart'} text-sm"></i>
          </button>

          <!-- Quick view hint pill -->
          <div class="absolute bottom-2 left-2 right-2 flex justify-center opacity-0 group-hover:opacity-100 transition duration-200">
            <span class="bg-black/75 backdrop-blur text-white text-[11px] font-medium px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <i class="ph ph-eye"></i> Xem chi tiết
            </span>
          </div>
        </div>

        <!-- Product Info -->
        <div class="p-3 sm:p-3.5 flex flex-col flex-1 justify-between">
          <div>
            <div class="flex items-center gap-1 text-[11px] text-amber-500 mb-1">
              <i class="ph-fill ph-star"></i>
              <span class="font-medium text-stone-700">${item.rating}</span>
              <span class="text-stone-400">(${item.sold}+ đã bán)</span>
            </div>
            <h3 class="font-serif text-sm sm:text-base font-semibold text-stone-900 line-clamp-2 leading-snug group-hover:text-brand-700 transition">
              ${item.name}
            </h3>
          </div>

          <!-- Price & Order Action -->
          <div class="mt-2.5 pt-2 border-t border-stone-100">
            <div class="flex items-baseline justify-between">
              <div>
                <span class="text-xs sm:text-sm font-bold text-stone-900">${formatVND(item.price)}</span>
                <span class="text-[10px] text-stone-400 line-through block sm:inline sm:ml-1">${formatVND(item.originalPrice)}</span>
              </div>
              <span class="text-[10px] font-bold text-rose-600 bg-rose-50 px-1.5 py-0.5 rounded">
                ${item.discount}
              </span>
            </div>

            <!-- Passio Style Quick Buy Button -->
            <button onclick="event.stopPropagation(); openModal(${item.id})"
                    class="mt-2.5 w-full py-1.5 rounded-xl bg-stone-900 hover:bg-brand-700 text-white text-[11px] font-medium flex items-center justify-center gap-1.5 transition active:scale-95 shadow-xs">
              <i class="ph-bold ph-shopping-bag"></i> Mua ngay
            </button>
          </div>
        </div>

      </div>
    `;
  }).join('');
}

// TOGGLE WISHLIST
window.toggleWishlist = function(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(item => item !== id);
    showToast("Đã xóa khỏi danh sách yêu thích");
  } else {
    wishlist.push(id);
    showToast("Đã lưu vào danh sách yêu thích ❤️");
  }
  localStorage.setItem('mayla_wishlist', JSON.stringify(wishlist));
  updateWishlistBadge();
  renderProducts();
};

function updateWishlistBadge() {
  if (wishlist.length > 0) {
    wishlistBadgeEl.textContent = wishlist.length;
    wishlistBadgeEl.classList.remove('hidden');
  } else {
    wishlistBadgeEl.classList.add('hidden');
  }
}

// FILTER WISHLIST ONLY
document.getElementById('btn-wishlist-toggle').addEventListener('click', () => {
  if (wishlist.length === 0) {
    showToast("Nàng chưa bấm thích mẫu nào cả!");
    return;
  }
  // Filter products by wishlist
  const originalProducts = PRODUCTS.filter(p => wishlist.includes(p.id));
  productGrid.innerHTML = originalProducts.map(item => `
    <div class="product-card bg-white rounded-2xl overflow-hidden border border-stone-200/70 shadow-xs flex flex-col justify-between cursor-pointer" onclick="openModal(${item.id})">
      <div class="img-container relative aspect-[3/4] overflow-hidden bg-stone-100">
        <img src="${item.image}" onerror="this.onerror=null; this.src='${item.fallbackImage}'" alt="${item.name}" class="w-full h-full object-cover">
        <button onclick="event.stopPropagation(); toggleWishlist(${item.id})" class="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-white/90 text-rose-500 flex items-center justify-center shadow-xs">
          <i class="ph-fill ph-heart text-sm"></i>
        </button>
      </div>
      <div class="p-3">
        <h3 class="font-serif text-sm font-semibold text-stone-900 line-clamp-2">${item.name}</h3>
        <p class="mt-1 font-bold text-stone-900 text-xs">${formatVND(item.price)}</p>
      </div>
    </div>
  `).join('');
  productCountEl.textContent = `${originalProducts.length} mẫu trong mục yêu thích`;
  showToast(`Hiển thị ${wishlist.length} thiết kế yêu thích của bạn`);
});

// MODAL OPEN / CLOSE
window.openModal = function(id) {
  const item = PRODUCTS.find(p => p.id === id);
  if (!item) return;

  modalImg.src = item.image;
  modalImg.onerror = function() {
    this.onerror = null;
    this.src = item.fallbackImage;
  };
  modalBadge.textContent = item.badge;
  modalBadge.className = `absolute top-3 left-3 px-2.5 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase shadow-sm ${getBadgeClass(item.badge)}`;
  modalTitle.textContent = item.name;
  modalPrice.textContent = formatVND(item.price);
  modalOriginalPrice.textContent = formatVND(item.originalPrice);
  modalDiscount.textContent = item.discount;
  modalDesc.textContent = item.desc;
  
  modalShopeeLink.href = item.shopeeUrl;
  modalInstaLink.href = item.instaUrl;

  productModal.classList.add('show');
  document.body.style.overflow = 'hidden';
};

function closeModal() {
  productModal.classList.remove('show');
  document.body.style.overflow = '';
}

modalCloseBtn.addEventListener('click', closeModal);
productModal.addEventListener('click', (e) => {
  if (e.target === productModal) closeModal();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && productModal.classList.contains('show')) {
    closeModal();
  }
});

// SIZE PILL TOGGLE IN MODAL
document.querySelectorAll('.size-pill').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size-pill').forEach(b => {
      b.classList.remove('bg-stone-900', 'text-white', 'border-stone-900');
      b.classList.add('border-stone-200', 'text-stone-700');
    });
    btn.classList.add('bg-stone-900', 'text-white', 'border-stone-900');
    btn.classList.remove('border-stone-200', 'text-stone-700');
  });
});

// SEARCH BAR EVENTS
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value;
  if (searchQuery.trim().length > 0) {
    searchClearBtn.classList.remove('hidden');
  } else {
    searchClearBtn.classList.add('hidden');
  }
  renderProducts();
});

searchClearBtn.addEventListener('click', () => {
  searchInput.value = '';
  searchQuery = '';
  searchClearBtn.classList.add('hidden');
  renderProducts();
});

// SORT SELECT
sortSelect.addEventListener('change', (e) => {
  currentSort = e.target.value;
  renderProducts();
});

// SHARE BUTTON (COPY LINK)
document.getElementById('btn-share').addEventListener('click', () => {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(window.location.href).then(() => {
      showToast("Đã sao chép link shop vào bộ nhớ tạm! ✨");
    }).catch(() => {
      showToast("Đã sao chép link shop!");
    });
  } else {
    showToast("Đã sao chép link shop!");
  }
});

// INIT CALLS
document.addEventListener('DOMContentLoaded', () => {
  renderCategoryPills();
  renderProducts();
  updateWishlistBadge();
});
