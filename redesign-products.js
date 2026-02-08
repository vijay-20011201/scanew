const fs = require('fs');
const path = require('path');

// Read the master template (forklift12.html) to get the CSS
const masterHTML = fs.readFileSync(path.join(__dirname, 'forklift12.html'), 'utf-8');
const cssMatch = masterHTML.match(/<style>([\s\S]*?)<\/style>/);
const templateCSS = cssMatch[1];

// Page-specific data for all 11 remaining pages
const pages = {
    'forklift16.html': {
        title: '16 Ton Forklift - LT-16 | SCA Heavy Equipment',
        heroLabel: 'Forklift Range',
        h1: 'LT-16 <span class="highlight">16 Ton</span> Forklift',
        subtitle: 'Robust 16 ton capacity forklift with duplex mast and superior hydraulics for warehouses and manufacturing facilities.',
        breadcrumb: '16 Ton Forklift',
        specs: [
            { val: '16 Ton', lbl: 'Lifting Capacity' },
            { val: '4.0 m', lbl: 'Lift Height' },
            { val: '133 HP', lbl: 'Engine Power' },
            { val: 'ISO', lbl: '9001:2015 Certified' }
        ]
    },
    'forklift20.html': {
        title: '20 Ton Forklift - LT-20 | SCA Heavy Equipment',
        heroLabel: 'Forklift Range',
        h1: 'LT-20 <span class="highlight">20 Ton</span> Forklift',
        subtitle: 'Powerful 20 ton forklift delivering exceptional performance for heavy material handling operations across industries.',
        breadcrumb: '20 Ton Forklift',
        specs: [
            { val: '20 Ton', lbl: 'Lifting Capacity' },
            { val: '4.0 m', lbl: 'Lift Height' },
            { val: '160 HP', lbl: 'Engine Power' },
            { val: 'ISO', lbl: '9001:2015 Certified' }
        ]
    },
    'forklift35.html': {
        title: '35 Ton Forklift - LT-35 | SCA Heavy Equipment',
        heroLabel: 'Forklift Range',
        h1: 'LT-35 <span class="highlight">35 Ton</span> Forklift',
        subtitle: 'Industrial-grade 35 ton forklift built for demanding port operations and construction site applications.',
        breadcrumb: '35 Ton Forklift',
        specs: [
            { val: '35 Ton', lbl: 'Lifting Capacity' },
            { val: '4.0 m', lbl: 'Lift Height' },
            { val: '248 HP', lbl: 'Engine Power' },
            { val: 'ISO', lbl: '9001:2015 Certified' }
        ]
    },
    'forklift40.html': {
        title: '40 Ton Forklift - LT-40 | SCA Heavy Equipment',
        heroLabel: 'Forklift Range',
        h1: 'LT-40 <span class="highlight">40 Ton</span> Forklift',
        subtitle: 'High-capacity 40 ton forklift with advanced stability systems for heavy-duty industrial lifting operations.',
        breadcrumb: '40 Ton Forklift',
        specs: [
            { val: '40 Ton', lbl: 'Lifting Capacity' },
            { val: '4.0 m', lbl: 'Lift Height' },
            { val: '248 HP', lbl: 'Engine Power' },
            { val: 'ISO', lbl: '9001:2015 Certified' }
        ]
    },
    'forklift45.html': {
        title: '45 Ton Forklift - LT-45 | SCA Heavy Equipment',
        heroLabel: 'Forklift Range',
        h1: 'LT-45 <span class="highlight">45 Ton</span> Forklift',
        subtitle: "India's first indigenous 45 ton capacity forklift \u2014 premium material handling built for maximum performance.",
        breadcrumb: '45 Ton Forklift',
        specs: [
            { val: '45 Ton', lbl: 'Lifting Capacity' },
            { val: '4.0 m', lbl: 'Lift Height' },
            { val: '248 HP', lbl: 'Engine Power' },
            { val: 'ISO', lbl: '9001:2015 Certified' }
        ]
    },
    'forklift50.html': {
        title: '50 Ton Forklift - LT-50 | SCA Heavy Equipment',
        heroLabel: 'Forklift Range',
        h1: 'LT-50 <span class="highlight">50 Ton</span> Forklift',
        subtitle: "India's first indigenously manufactured 50 ton forklift \u2014 unmatched lifting power for the toughest jobs.",
        breadcrumb: '50 Ton Forklift',
        specs: [
            { val: '50 Ton', lbl: 'Lifting Capacity' },
            { val: '4.0 m', lbl: 'Lift Height' },
            { val: '350 HP', lbl: 'Engine Power' },
            { val: 'ISO', lbl: '9001:2015 Certified' }
        ]
    },
    'coilhandler.html': {
        title: 'Coil Handler - PC-37 | SCA Heavy Equipment',
        heroLabel: 'Specialized Handling',
        h1: 'PC-37 Coil <span class="highlight">Handler</span>',
        subtitle: 'Precision-engineered coil stacker for safe handling of steel coils in steel plants and industrial facilities.',
        breadcrumb: 'Coil Handler',
        specs: [
            { val: '32 Ton', lbl: 'Lifting Capacity' },
            { val: '9.0 m', lbl: 'Lift Height' },
            { val: '248 HP', lbl: 'Engine Power' },
            { val: 'ISO', lbl: '9001:2015 Certified' }
        ]
    },
    'electricreachstacker.html': {
        title: 'Electric ReachStacker - AE Series | SCA Heavy Equipment',
        heroLabel: 'Zero Emission Technology',
        h1: 'Electric <span class="highlight">ReachStacker</span>',
        subtitle: 'Zero-emission electric reachstacker \u2014 reducing 280 tons of CO\u2082 per unit annually with full lifting power.',
        breadcrumb: 'Electric ReachStacker',
        specs: [
            { val: '45 Ton', lbl: 'Rated Capacity' },
            { val: '8.4 m', lbl: 'Lift Height' },
            { val: '214 kW', lbl: 'Drive Motor' },
            { val: 'Zero', lbl: 'Emissions' }
        ]
    },
    'emptycontainer3h.html': {
        title: 'Empty Container Handler ECT-08-3H | SCA Heavy Equipment',
        heroLabel: 'Container Solutions',
        h1: 'ECT-08-3H Container <span class="highlight">Handler</span>',
        subtitle: '3-High empty container handler for efficient container management at ports and logistics terminals.',
        breadcrumb: 'Empty Container Handler 3H',
        specs: [
            { val: '8 Ton', lbl: 'Lifting Capacity' },
            { val: '15.26 m', lbl: 'Lift Height' },
            { val: '3 High', lbl: 'Stacking' },
            { val: 'ISO', lbl: '9001:2015 Certified' }
        ]
    },
    'emptycontainer5h.html': {
        title: 'Empty Container Handler ECT-08-5H | SCA Heavy Equipment',
        heroLabel: 'Container Solutions',
        h1: 'ECT-08-5H Container <span class="highlight">Handler</span>',
        subtitle: '5-High empty container handler with 14 meter lift height for maximum stacking capacity at ports.',
        breadcrumb: 'Empty Container Handler 5H',
        specs: [
            { val: '8 Ton', lbl: 'Lifting Capacity' },
            { val: '14 m', lbl: 'Lift Height' },
            { val: '5 High', lbl: 'Stacking' },
            { val: 'ISO', lbl: '9001:2015 Certified' }
        ]
    },
    'standardreachstacker.html': {
        title: 'Diesel ReachStacker - LCH RS-45 | SCA Heavy Equipment',
        heroLabel: 'Heavy Lifting Power',
        h1: 'Diesel <span class="highlight">ReachStacker</span>',
        subtitle: 'Standard and Advance diesel reachstacker built for high-performance container handling in ports and terminals.',
        breadcrumb: 'Diesel ReachStacker',
        specs: [
            { val: '45 Ton', lbl: 'Rated Capacity' },
            { val: '8.4 m', lbl: 'Lift Height' },
            { val: '248 HP', lbl: 'Engine Power' },
            { val: 'ISO', lbl: '9001:2015 Certified' }
        ]
    }
};

function extractContent(html) {
    const result = {};

    // Extract hero background image
    const heroBgMatch = html.match(/url\(['"]?([^'")\s]+)['"]?\)\s*(?:center\/cover|center)/);
    result.heroImage = heroBgMatch ? heroBgMatch[1].replace(/\\/g, '') : '';

    // Extract gallery items (image srcs)
    const galleryImgs = [];
    const imgRegex = /<div class="gallery-item">\s*<img src="([^"]+)"/g;
    let m;
    while ((m = imgRegex.exec(html)) !== null) {
        galleryImgs.push(m[1]);
    }
    result.galleryImages = galleryImgs;

    // Extract spec table content (everything between spec table tags)
    const specMatch = html.match(/<div id="specifications" class="tab-content">([\s\S]*?)<\/div>\s*\n/);
    result.specTableHTML = specMatch ? specMatch[1].trim() : '';

    // Extract overview content
    const overviewMatch = html.match(/<div id="overview" class="tab-content active">([\s\S]*?)<\/div>\s*\n/);
    result.overviewHTML = overviewMatch ? overviewMatch[1].trim() : '';

    // Extract design content
    const designMatch = html.match(/<div id="design" class="tab-content">([\s\S]*?)<\/div>\s*\n/);
    result.designHTML = designMatch ? designMatch[1].trim() : '';

    // Extract feature cards
    const featureMatch = html.match(/<div class="feature-cards">([\s\S]*?)<\/div>\s*<\/div>\s*<\/section>\s*\n\s*<!-- Tabs/);
    result.featureCardsHTML = featureMatch ? featureMatch[1].trim() : '';

    return result;
}

function buildPage(pageData, content, css) {
    const galleryItems = content.galleryImages.map((src, i) => {
        const alt = pageData.breadcrumb + ' View ' + (i + 1);
        return `                <div class="gallery-item" onclick="openLightbox(${i})">
                    <img src="${src}" alt="${alt}">
                    <div class="zoom-icon"><i class="fas fa-search-plus"></i></div>
                </div>`;
    }).join('\n');

    const specsBar = pageData.specs.map(s => `            <div class="spec-highlight">
                <div class="spec-val">${s.val}</div>
                <div class="spec-lbl">${s.lbl}</div>
            </div>`).join('\n');

    // Clean up overview HTML - fix indentation
    let overviewHTML = content.overviewHTML;
    let specHTML = content.specTableHTML;
    let designHTML = content.designHTML;

    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${pageData.title}</title>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
    <style>${css}
    </style>
</head>
<body>
    <div id="header-placeholder"></div>

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-bg" style="background-image: url('${content.heroImage}')"></div>
        <div class="hero-content">
            <nav class="hero-breadcrumb">
                <a href="index.html">Home</a> <span class="sep">/</span>
                <a href="index.html#products">Products</a> <span class="sep">/</span>
                <span>${pageData.breadcrumb}</span>
            </nav>
            <span class="hero-label">${pageData.heroLabel}</span>
            <h1>${pageData.h1}</h1>
            <p class="subtitle">${pageData.subtitle}</p>
            <div class="hero-actions">
                <a href="#specifications" class="hero-btn hero-btn-primary"><i class="fas fa-cogs"></i> Specifications</a>
                <a href="contact.html" class="hero-btn hero-btn-ghost"><i class="fas fa-envelope"></i> Get a Quote</a>
            </div>
        </div>
    </section>

    <!-- Key Specs Bar -->
    <div class="specs-bar">
        <div class="specs-bar-inner">
${specsBar}
        </div>
    </div>

    <!-- Features -->
    <section class="features-section">
        <div class="features-container">
            <div class="section-header">
                <div class="label">Key Features</div>
                <h2>Built for Performance</h2>
                <p>Engineering excellence meets robust construction in every detail</p>
            </div>
            <div class="feature-cards">
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-shield-alt"></i></div>
                    <h3>Strength & Stability</h3>
                    <p>Engineered with robust construction and advanced stability systems for maximum safety and reliability in demanding industrial environments.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-cogs"></i></div>
                    <h3>Ease & Safety in Operations</h3>
                    <p>Intuitive controls, ergonomic cabin design, and comprehensive safety features ensure smooth operation while protecting operators and cargo.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-tachometer-alt"></i></div>
                    <h3>Superior Performance</h3>
                    <p>High-performance engine, efficient hydraulics, and precision engineering deliver exceptional lifting capacity, speed, and productivity.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Tabs Section -->
    <section class="tabs-section" id="specifications">
        <div class="tabs-container">
            <div class="section-header">
                <div class="label">Product Details</div>
                <h2>Technical Information</h2>
                <p>Complete specifications, overview, and design drawings</p>
            </div>
            <div class="tab-nav">
                <button class="tab-button active" onclick="openTab(event, 'overview')">Overview</button>
                <button class="tab-button" onclick="openTab(event, 'specs')">Specifications</button>
                <button class="tab-button" onclick="openTab(event, 'design')">Design</button>
            </div>

            <div id="overview" class="tab-content active">
                ${overviewHTML}
            </div>

            <div id="specs" class="tab-content">
                ${specHTML}
            </div>

            <div id="design" class="tab-content">
                ${designHTML}
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="cta-container">
            <h2>Ready to Transform Your Operations?</h2>
            <p>Download the complete product brochure or get a customized quote tailored to your specific requirements.</p>
            <div class="cta-buttons">
                <a href="#" class="cta-btn cta-btn-primary"><i class="fas fa-download"></i> Download Brochure</a>
                <a href="contact.html" class="cta-btn cta-btn-outline"><i class="fas fa-file-alt"></i> Request Quote</a>
            </div>
        </div>
    </section>

    <!-- Gallery Section (Bottom, above footer) -->
    <section class="gallery-section">
        <div class="gallery-container">
            <div class="section-header">
                <div class="label">Photo Gallery</div>
                <h2>See It In Action</h2>
                <p>Explore our equipment from every angle</p>
            </div>
            <div class="gallery-grid">
${galleryItems}
            </div>
        </div>
    </section>

    <!-- Lightbox -->
    <div class="lightbox" id="lightbox">
        <button class="lightbox-close" onclick="closeLightbox()"><i class="fas fa-times"></i></button>
        <button class="lightbox-nav lightbox-prev" onclick="navLightbox(-1)"><i class="fas fa-chevron-left"></i></button>
        <img id="lightbox-img" src="" alt="">
        <button class="lightbox-nav lightbox-next" onclick="navLightbox(1)"><i class="fas fa-chevron-right"></i></button>
    </div>

    <!-- Floating WhatsApp -->
    <a href="https://wa.me/91XXXXXXXXXX" class="whatsapp-float" target="_blank">
        <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp">
    </a>

    <div id="footer-placeholder"></div>

    <script>
        // Load Header
        fetch('header.html')
            .then(r => r.text())
            .then(data => {
                const ph = document.getElementById('header-placeholder');
                ph.innerHTML = data;
                ph.querySelectorAll('script').forEach(old => {
                    const s = document.createElement('script');
                    s.textContent = old.textContent;
                    old.parentNode.replaceChild(s, old);
                });
            });

        // Load Footer
        fetch('footer.html')
            .then(r => r.text())
            .then(data => { document.getElementById('footer-placeholder').innerHTML = data; });

        // Tabs
        function openTab(evt, tabName) {
            document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
            document.querySelectorAll('.tab-button').forEach(b => b.classList.remove('active'));
            document.getElementById(tabName).classList.add('active');
            evt.currentTarget.classList.add('active');
        }

        // Lightbox
        var lbImages = [];
        var lbIndex = 0;
        document.querySelectorAll('.gallery-item img').forEach(function(img) {
            lbImages.push(img.src);
        });

        function openLightbox(i) {
            lbIndex = i;
            document.getElementById('lightbox-img').src = lbImages[lbIndex];
            document.getElementById('lightbox').classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            document.getElementById('lightbox').classList.remove('active');
            document.body.style.overflow = '';
        }

        function navLightbox(dir) {
            lbIndex = (lbIndex + dir + lbImages.length) % lbImages.length;
            document.getElementById('lightbox-img').src = lbImages[lbIndex];
        }

        document.getElementById('lightbox').addEventListener('click', function(e) {
            if (e.target === this) closeLightbox();
        });

        document.addEventListener('keydown', function(e) {
            if (!document.getElementById('lightbox').classList.contains('active')) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') navLightbox(-1);
            if (e.key === 'ArrowRight') navLightbox(1);
        });
    </script>
</body>
</html>`;
}

// Process each page
Object.keys(pages).forEach(filename => {
    const filepath = path.join(__dirname, filename);
    try {
        const html = fs.readFileSync(filepath, 'utf-8');
        const content = extractContent(html);
        const pageData = pages[filename];
        const newHTML = buildPage(pageData, content, templateCSS);
        fs.writeFileSync(filepath, newHTML, 'utf-8');
        console.log('Updated: ' + filename + ' (gallery: ' + content.galleryImages.length + ' images, hero: ' + (content.heroImage ? 'OK' : 'MISSING') + ')');
    } catch (err) {
        console.error('ERROR on ' + filename + ': ' + err.message);
    }
});

console.log('\nDone! All 11 product pages have been redesigned.');
