const stats = [
  { value: '20k+', label: 'Khách hàng' },
  { value: '4.9/5', label: 'Đánh giá' },
  { value: '48h', label: 'Giao hàng' },
]

const brands = ['Samsung', 'Xiaomi', 'Apple', 'LG', 'Philips', 'JBL']

const products = [
  {
    name: 'AirPulse Max',
    category: 'Audio',
    rating: '4.9',
    description: 'Âm thanh vòm, chống ồn, pin lên đến 30 giờ.',
    price: '1.690.000đ',
    image:
      'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Vision X4',
    category: 'Camera',
    rating: '4.8',
    description: 'Ghi hình 4K, ổn định hình ảnh, dễ dàng chia sẻ.',
    price: '4.250.000đ',
    image:
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Nova S20',
    category: 'Mobile',
    rating: '5.0',
    description: 'Hiệu năng mạnh mẽ với màn hình AMOLED 120Hz.',
    price: '8.990.000đ',
    image:
      'https://images.unsplash.com/photo-1550009158-9ebf69173e03?auto=format&fit=crop&w=900&q=80',
  },
]

const features = [
  {
    icon: '⚡',
    title: 'Giao hàng nhanh',
    text: 'Vận chuyển trong 24–48 giờ với hệ thống phủ sóng rộng khắp Việt Nam.',
  },
  {
    icon: '🛡️',
    title: 'Bảo hành rõ ràng',
    text: 'Chính sách bảo hành dài hạn và hỗ trợ kỹ thuật chuyên nghiệp.',
  },
  {
    icon: '💬',
    title: 'Tư vấn miễn phí',
    text: 'Đội ngũ chuyên gia giúp bạn chọn sản phẩm phù hợp tối ưu nhất.',
  },
]

const reviews = [
  {
    quote:
      'Mình vừa mua loa thông minh và rất hài lòng với chất lượng âm thanh, ship nhanh, tư vấn rất nhiệt tình.',
    author: 'Minh Anh',
    place: 'Hà Nội',
  },
  {
    quote:
      'Sản phẩm đến đúng hẹn, giá tốt, giao diện dễ dùng và bảo hành rõ ràng. Rất đáng mua.',
    author: 'Đức Huy',
    place: 'Đà Nẵng',
  },
  {
    quote:
      'Chúng tôi mua cho văn phòng và rất ưng ý với hiệu năng. Đội ngũ tư vấn cực kỳ chuyên nghiệp.',
    author: 'Hạnh Trang',
    place: 'TP.HCM',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 antialiased">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/75 backdrop-blur-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 font-black shadow-lg shadow-cyan-500/30">
              E
            </div>
            <span className="text-lg font-bold tracking-wide">ElectroHub</span>
          </div>

          <nav className="hidden items-center gap-8 text-sm text-slate-200 md:flex">
            <a href="#home" className="transition hover:text-cyan-300">Trang chủ</a>
            <a href="#products" className="transition hover:text-cyan-300">Sản phẩm</a>
            <a href="#features" className="transition hover:text-cyan-300">Ưu điểm</a>
            <a href="#reviews" className="transition hover:text-cyan-300">Đánh giá</a>
            <a href="#contact" className="transition hover:text-cyan-300">Liên hệ</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="hidden rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/10 sm:inline-flex">
              Đăng nhập
            </button>
            <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5">
              Mua ngay
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="bg-slate-950">
          <div className="mx-auto grid max-w-7xl gap-14 px-4 py-16 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:py-24">
            <div className="flex flex-col justify-center text-white">
              <span className="inline-flex w-fit rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-200">
                Công nghệ hiện đại • Giao hàng nhanh
              </span>
              <h1 className="mt-6 text-5xl font-black leading-[0.96] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
                Giải pháp điện tử thông minh cho mọi ngôi nhà.
              </h1>
              <p className="mt-6 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                Từ màn hình OLED, thiết bị gia dụng thông minh đến phụ kiện công nghệ, ElectroHub mang đến
                những sản phẩm chất lượng cao với giá hợp lý và hỗ trợ tận tâm.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#products"
                  className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5"
                >
                  Khám phá ngay
                </a>
                <a
                  href="#features"
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Tìm hiểu thêm
                </a>
              </div>

              <ul className="mt-10 flex flex-wrap gap-8 sm:gap-12">
                {stats.map((item) => (
                  <li key={item.label} className="flex flex-col gap-2">
                    <strong className="text-3xl font-black tracking-tight">{item.value}</strong>
                    <span className="text-sm text-slate-300">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative flex min-h-[500px] items-center justify-center">
              <div className="relative w-full max-w-[500px] overflow-hidden rounded-[34px] border border-white/10 bg-white/5 shadow-2xl shadow-cyan-500/10">
                <div className="absolute right-4 top-4 rounded-full bg-slate-950/70 px-3 py-1 text-xs font-bold text-white backdrop-blur-md">
                  Mới
                </div>
                <img
                  src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80"
                  alt="Smart speaker"
                  className="h-[420px] w-full object-cover"
                />
                <div className="bg-slate-950/90 p-5 text-white">
                  <h3 className="text-2xl font-bold">Smart Speaker Pro</h3>
                  <p className="mt-2 text-sm text-slate-300">Hỗ trợ AI, âm thanh sống động</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-2xl font-black">2.990.000đ</span>
                    <span className="rounded-full border border-emerald-400/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-300">
                      -18%
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -left-5 bottom-28 rounded-2xl bg-white p-4 shadow-xl shadow-slate-900/10">
                <div className="mb-2 inline-flex rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-violet-700">
                  Bán chạy
                </div>
                <div className="text-3xl font-black text-slate-900">4.800+</div>
                <div className="text-xs text-slate-500">lượt mua</div>
              </div>

              <div className="absolute -right-4 bottom-8 rounded-2xl bg-white p-4 shadow-xl shadow-slate-900/10">
                <div className="mb-2 inline-flex rounded-full bg-cyan-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-cyan-700">
                  Ưu đãi
                </div>
                <div className="text-2xl font-black text-slate-900">Miễn phí</div>
                <div className="text-xs text-slate-500">vận chuyển toàn quốc</div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-6">
          <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 rounded-2xl border border-slate-200 bg-white/80 px-5 py-6 shadow-sm sm:grid-cols-3 lg:grid-cols-6 lg:px-8">
            {brands.map((brand) => (
              <div key={brand} className="text-center text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
                {brand}
              </div>
            ))}
          </div>
        </section>

        <section id="products" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                Sản phẩm nổi bật
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-slate-900">
                Thiết bị điện tử được yêu thích nhất
              </h2>
            </div>
            <a href="#contact" className="hidden text-sm font-bold text-blue-600 hover:text-blue-500 sm:inline-block">
              Xem tất cả
            </a>
          </div>

          <div className="grid gap-7 md:grid-cols-2 xl:grid-cols-3">
            {products.map((product) => (
              <article key={product.name} className="group overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(13,27,41,0.06)] transition hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(13,27,41,0.10)]">
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-violet-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-violet-700">
                      {product.category}
                    </span>
                    <span className="text-sm font-bold text-amber-500">★ {product.rating}</span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-slate-900">{product.name}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{product.description}</p>

                  <div className="mt-6 flex items-center justify-between gap-4">
                    <span className="text-2xl font-black text-slate-900">{product.price}</span>
                    <button className="rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5">
                      Mua
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="features" className="bg-slate-100/70 py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-10 text-center">
              <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-700">
                Tại sao chọn chúng tôi
              </span>
              <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-slate-900">
                Đặt sự tin tưởng lên hàng đầu
              </h2>
            </div>

            <div className="grid gap-7 md:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-[0_18px_32px_rgba(11,22,37,0.04)]">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-100 to-violet-100 text-3xl">
                    {feature.icon}
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-slate-900">{feature.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{feature.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 rounded-[30px] bg-gradient-to-r from-slate-900 via-sky-950 to-indigo-900 px-6 py-8 text-white shadow-2xl shadow-slate-900/20 sm:px-10 lg:flex-row lg:items-center">
            <div>
              <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-200">
                Khuyến mãi mùa hè
              </span>
              <h2 className="mt-4 text-3xl font-black tracking-[-0.06em] sm:text-4xl">
                Giảm đến 30% cho thiết bị gia dụng thông minh
              </h2>
            </div>
            <a
              href="#contact"
              className="inline-flex rounded-xl bg-gradient-to-r from-cyan-400 to-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:-translate-y-0.5"
            >
              Nhận ưu đãi
            </a>
          </div>
        </section>

        <section id="reviews" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="inline-flex rounded-full bg-cyan-100 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-700">
              Khách hàng nói gì
            </span>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.06em] text-slate-900">
              Được tin tưởng bởi hàng nghìn người dùng
            </h2>
          </div>

          <div className="grid gap-7 md:grid-cols-3">
            {reviews.map((review) => (
              <blockquote key={review.author} className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_28px_rgba(12,27,41,0.04)]">
                <p className="text-base leading-8 text-slate-700">“{review.quote}”</p>
                <footer className="mt-6 flex flex-col">
                  <strong className="text-lg font-bold text-slate-900">{review.author}</strong>
                  <span className="text-sm text-slate-500">Khách hàng tại {review.place}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </section>
      </main>

      <footer id="contact" className="mt-16 bg-slate-950 px-4 py-16 text-slate-300 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_0.8fr_1fr]">
          <div>
            <div className="mb-4 flex items-center gap-3 text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-violet-500 font-black text-white">
                E
              </div>
              <span className="text-lg font-bold tracking-wide">ElectroHub</span>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-300">
              Chuyên cung cấp thiết bị điện tử cao cấp, hiện đại và bền bỉ cho cuộc sống ngày càng thông minh.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Liên kết</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#products" className="hover:text-cyan-300">Sản phẩm</a></li>
              <li><a href="#features" className="hover:text-cyan-300">Ưu điểm</a></li>
              <li><a href="#reviews" className="hover:text-cyan-300">Đánh giá</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Liên hệ</h4>
            <ul className="space-y-3 text-sm">
              <li>📞 1900 888 999</li>
              <li>✉️ hello@electrohub.vn</li>
              <li>📍 123 Nguyễn Huệ, Q1, TP.HCM</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-7xl border-t border-white/10 pt-6 text-center text-sm text-slate-400">
          © 2026 ElectroHub. All rights reserved.
        </div>
      </footer>
    </div>
  )
}

export default App
