/**
 * MAYLA STUDIOS - Bio Storefront JavaScript
 * Official products cloned directly from @mayla.studios Instagram posts
 */

// PRODUCT DATABASE (Direct from Mayla Studios Instagram)
const PRODUCTS = [
  {
    id: 1,
    name: "Floral Top & White Boho Harem Pants",
    category: "sets",
    price: 520000,
    originalPrice: 620000,
    discount: "-16%",
    badge: "HOT",
    image: "images/sp1.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=700&q=80",
    desc: "Set Floral Top kết hợp cùng White Boho Harem Pants with Lace Trim viền ren tinh tế. Phong cách tiểu thư boho nữ tính, phom dáng bay bổng nhẹ nhàng. Size: S | M | L. Pre-order now open - Free shipping for early orders.",
    shopeeUrl: "https://shopee.vn",
    instaUrl: "https://www.instagram.com/p/De1Fyrglvf_/",
    sold: 540,
    rating: 5.0,
    reviews: 126
  },
  {
    id: 2,
    name: "Belle Top & Ivory Mini Skirt Set",
    category: "sets",
    price: 490000,
    originalPrice: 580000,
    discount: "-15%",
    badge: "NEW",
    image: "images/sp2.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=700&q=80",
    desc: "Set áo Belle Top phối cùng chân váy ngắn Ivory Mini Skirt. Thiết kế tôn trọn eo thon và nét duyên dáng thanh lịch, phù hợp cho buổi hẹn hò, cafe cuối tuần. Size: S | M | L. #vietnamlocalbrand",
    shopeeUrl: "https://shopee.vn",
    instaUrl: "https://www.instagram.com/p/DewfzNaFvBH/",
    sold: 430,
    rating: 4.9,
    reviews: 95
  },
  {
    id: 3,
    name: "Soft Blue Mood Dress - MAYLA Elegant",
    category: "dresses",
    price: 550000,
    originalPrice: 650000,
    discount: "-15%",
    badge: "BEST",
    image: "images/sp3.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?auto=format&fit=crop&w=700&q=80",
    desc: "Soft blue, soft mood. 🩵 Elegance in every little detail. MAYLA see you in your own way. Tone xanh pastel mát lành, thiết kế nữ tính mềm mại cho mọi góc nhìn. Color: Blue. Size: S | M | L. Pre-order now open.",
    shopeeUrl: "https://shopee.vn",
    instaUrl: "https://www.instagram.com/p/DeJ8CN0n4hK/",
    sold: 680,
    rating: 5.0,
    reviews: 142
  },
  {
    id: 4,
    name: "Find Your Mood - Mayla Daily Muse Top",
    category: "tops",
    price: 380000,
    originalPrice: 450000,
    discount: "-15%",
    badge: "HOT",
    image: "images/sp4.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1564257631407-4deb129f042b?auto=format&fit=crop&w=700&q=80",
    desc: "Find your mood. Find your Mayla. Mẫu áo kiểu nhẹ nhàng thoáng mát, phom dáng thanh thoát dễ dàng mix-match cùng quần suông hoặc chân váy chữ A.",
    shopeeUrl: "https://shopee.vn",
    instaUrl: "https://www.instagram.com/p/DeJbplksLJO/",
    sold: 310,
    rating: 4.9,
    reviews: 73
  },
  {
    id: 5,
    name: "Ivory Muse Set - Creamy, Dreamy & Feminine",
    category: "sets",
    price: 590000,
    originalPrice: 720000,
    discount: "-18%",
    badge: "BEST",
    image: "images/sp5.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80",
    desc: "“Creamy, dreamy & effortlessly feminine 💝”. Bộ thiết kế signature Ivory Muse set đình đám của Mayla Studios. Tông màu ngà ấm áp, chất liệu vải thượng hạng ôm lượn mềm mại theo từng cử chỉ. Color: Ivory. Size: S | M | L.",
    shopeeUrl: "https://shopee.vn",
    instaUrl: "https://www.instagram.com/p/DeBs-WyE88Q/",
    sold: 890,
    rating: 5.0,
    reviews: 210
  },
  {
    id: 6,
    name: "Mayla Look - Signature Feminine Muse",
    category: "dresses",
    price: 560000,
    originalPrice: 680000,
    discount: "-17%",
    badge: "NEW",
    image: "images/sp6.jpg",
    fallbackImage: "https://images.unsplash.com/photo-1568252542512-9fe8fe9c87bb?auto=format&fit=crop&w=700&q=80",
    desc: "Join the Mayla look 🌷. Thiết kế đầm tiểu thư chuẩn phong cách Mayla Studios. Sự giao thoa giữa nét thanh lịch hiện đại và vẻ đẹp ngọt ngào tinh khiết.",
    shopeeUrl: "https://shopee.vn",
    instaUrl: "https://www.instagram.com/p/DeBjI4iTkWr/",
    sold: 490,
    rating: 4.9,
    reviews: 104
  }
];

// CATEGORIES CONFIG
const CATEGORIES = [
  { id: 'all', name: 'Tất cả' },
  { id: 'sets', name: 'Set Đồ & Muse' },
  { id: 'dresses', name: 'Đầm & Váy' },
  { id: 'tops', name: 'Áo Kiểu' },
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
const productCountEl = document.getElementById('product-count');
const emptyStateEl = document.getElementById('empty-state');
const wishlistBadgeEl = document.getElementById('wishlist-badge');

// Custom Dropdown Elements
const customSortDropdown = document.getElementById('custom-sort-dropdown');
const customSortBtn = document.getElementById('custom-sort-btn');
const customSortMenu = document.getElementById('custom-sort-menu');
const customSortArrow = document.getElementById('custom-sort-arrow');
const customSortLabel = document.getElementById('custom-sort-label');
const sortOptions = document.querySelectorAll('.sort-option');

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
  
  // Reset custom sort UI
  customSortLabel.textContent = 'Nổi bật';
  sortOptions.forEach(opt => {
    const isFeatured = opt.getAttribute('data-value') === 'featured';
    const check = opt.querySelector('.check-icon');
    if (isFeatured) {
      opt.classList.add('bg-stone-100/80', 'text-stone-800', 'font-semibold');
      opt.classList.remove('text-stone-600', 'hover:bg-stone-50', 'font-medium');
      if (check) check.classList.remove('hidden');
    } else {
      opt.classList.remove('bg-stone-100/80', 'text-stone-800', 'font-semibold');
      opt.classList.add('text-stone-600', 'hover:bg-stone-50', 'font-medium');
      if (check) check.classList.add('hidden');
    }
  });

  renderCategoryPills();
  renderProducts();
};

// GET FILTERED AND SORTED PRODUCTS
function getFilteredProducts() {
  let list = PRODUCTS.filter(item => {
    const matchCat = activeCategory === 'all' || item.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchSearch = !q || 
      item.name.toLowerCase().includes(q) || 
      item.desc.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q);
    const matchBadge = !activeBadge || item.badge === activeBadge;
    return matchCat && matchSearch && matchBadge;
  });

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
  const sizeChartTable = document.getElementById('size-chart-table');
  if (sizeChartTable) sizeChartTable.classList.add('hidden');
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

// SIZE CHART ACCORDION TOGGLE
const toggleSizeChartBtn = document.getElementById('toggle-size-chart');
const sizeChartTable = document.getElementById('size-chart-table');
if (toggleSizeChartBtn && sizeChartTable) {
  toggleSizeChartBtn.addEventListener('click', (e) => {
    e.preventDefault();
    sizeChartTable.classList.toggle('hidden');
  });
}

// SIZE PILL TOGGLE IN MODAL
let selectedSize = 'S';
document.querySelectorAll('.size-pill').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.size-pill').forEach(b => {
      b.classList.remove('bg-stone-900', 'text-white', 'border-stone-900');
      b.classList.add('border-stone-200', 'text-stone-700');
    });
    btn.classList.add('bg-stone-900', 'text-white', 'border-stone-900');
    btn.classList.remove('border-stone-200', 'text-stone-700');
    selectedSize = btn.getAttribute('data-size') || 'S';
  });
});

// INSTAGRAM MODAL ORDER MESSAGE HELPER
modalInstaLink.addEventListener('click', () => {
  const currentTitle = modalTitle.textContent || 'thiết kế Mayla';
  const orderMsg = `Chào Mayla Studios, mình muốn tư vấn đặt mẫu "${currentTitle}" (Size ${selectedSize}) ạ! ✨`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(orderMsg).then(() => {
      showToast(`Đã sao chép nội dung: "${currentTitle} - Size ${selectedSize}"! ✨`);
    });
  }
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

// CUSTOM SORT DROPDOWN LOGIC
function toggleSortMenu() {
  const isOpen = customSortMenu.classList.contains('show');
  if (isOpen) {
    closeSortMenu();
  } else {
    customSortMenu.classList.remove('hidden');
    // Force reflow
    void customSortMenu.offsetWidth;
    customSortMenu.classList.add('show');
    customSortArrow.classList.add('rotate-180');
  }
}

function closeSortMenu() {
  customSortMenu.classList.remove('show');
  customSortArrow.classList.remove('rotate-180');
  setTimeout(() => {
    if (!customSortMenu.classList.contains('show')) {
      customSortMenu.classList.add('hidden');
    }
  }, 150);
}

customSortBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  toggleSortMenu();
});

sortOptions.forEach(opt => {
  opt.addEventListener('click', (e) => {
    e.stopPropagation();
    const val = opt.getAttribute('data-value');
    const label = opt.getAttribute('data-label');
    currentSort = val;
    customSortLabel.textContent = label;

    // Update active styles and check icons
    sortOptions.forEach(o => {
      const isSelected = o === opt;
      const check = o.querySelector('.check-icon');
      if (isSelected) {
        o.classList.add('bg-stone-100/80', 'text-stone-800', 'font-semibold');
        o.classList.remove('text-stone-600', 'hover:bg-stone-50', 'font-medium');
        if (check) check.classList.remove('hidden');
      } else {
        o.classList.remove('bg-stone-100/80', 'text-stone-800', 'font-semibold');
        o.classList.add('text-stone-600', 'hover:bg-stone-50', 'font-medium');
        if (check) check.classList.add('hidden');
      }
    });

    closeSortMenu();
    renderProducts();
  });
});

// Close dropdown when clicking outside
document.addEventListener('click', (e) => {
  if (customSortDropdown && !customSortDropdown.contains(e.target)) {
    closeSortMenu();
  }
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
