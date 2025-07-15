# Dr X - حلول الذكاء الاصطناعي وتطوير الويب

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://36drx.vercel.app)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/ZU067KgNptN)

## نظرة عامة

Dr X هي شركة رائدة في تقديم حلول الذكاء الاصطناعي المتطورة وتطوير الويب وتطبيقات الجوال. يهدف هذا المشروع إلى عرض خدماتنا ومشاريعنا، وتوفير واجهة دردشة تفاعلية مدعومة بالذكاء الاصطناعي لمساعدة المستخدمين. تم بناء الموقع باستخدام Next.js 15، Tailwind CSS، و Shadcn/ui، مع التركيز على التصميم المتجاوب والأداء العالي.

## الميزات الرئيسية

*   **واجهة دردشة متطورة بالذكاء الاصطناعي:** مدعومة بنماذج AI SDK (DeepSeek R1 و Hugging Face) لتوفير استجابات فورية وذكية.
*   **تصميم متجاوب:** تجربة مستخدم سلسة على جميع الأجهزة (سطح المكتب، الأجهزة اللوحية، الهواتف المحمولة).
*   **خدمات شاملة:** عرض لخدمات تطوير الويب، تطبيقات الجوال، وحلول الذكاء الاصطناعي.
*   **معرض أعمال (Portfolio):** استعراض لمشاريعنا السابقة.
*   **صفحة تحليلات:** عرض بيانات وتحليلات ذات صلة.
*   **صفحات معلوماتية:** "من نحن" و "تواصل معنا" لتقديم معلومات عن الشركة وطرق التواصل.
*   **شعار Dr X المميز:** تصميم شعار جذاب وبارز يعكس هوية الشركة.

## التقنيات المستخدمة

*   **Next.js 15:** إطار عمل React لتطبيقات الويب عالية الأداء.
*   **React:** مكتبة JavaScript لبناء واجهات المستخدم.
*   **Tailwind CSS:** إطار عمل CSS سريع لبناء تصميمات مخصصة.
*   **Shadcn/ui:** مكونات واجهة مستخدم قابلة للتخصيص مبنية على Tailwind CSS.
*   **Lucide React:** مكتبة أيقونات.
*   **AI SDK:** لتكامل نماذج الذكاء الاصطناعي (DeepSeek R1, Hugging Face).

## الإعداد والتشغيل محليًا

لإعداد المشروع وتشغيله على جهازك المحلي، اتبع الخطوات التالية:

1.  **استنساخ المستودع:**
    \`\`\`bash
    git clone https://github.com/wolfomani/36drx.git
    cd 36drx
    \`\`\`

2.  **تثبيت التبعيات:**
    نحن نستخدم `pnpm` كمدير حزم. تأكد من تثبيته:
    \`\`\`bash
    npm install -g pnpm
    pnpm install
    \`\`\`

3.  **تشغيل خادم التطوير:**
    \`\`\`bash
    pnpm run dev
    \`\`\`
    سيتم تشغيل التطبيق على `http://localhost:3000`.

## النشر

يمكن نشر هذا المشروع بسهولة على Vercel. إذا قمت باستنساخ هذا المستودع من v0.dev، فسيتم ربطه تلقائيًا بحسابك على Vercel.

1.  **ربط المشروع بـ Vercel CLI (إذا لم يكن مرتبطًا بالفعل):**
    \`\`\`bash
    vercel link
    \`\`\`

2.  **النشر إلى Vercel:**
    \`\`\`bash
    vercel deploy
    \`\`\`
    أو يمكنك النشر مباشرة من لوحة تحكم Vercel بربط مستودع GitHub الخاص بك.

## معلومات الاتصال

للاستفسارات أو الدعم، يرجى التواصل معنا:

*   **البريد الإلكتروني:** balqees0alalawi@gmail.com
*   **GitHub:** @abdulaziz-x7r1g

## الترخيص

هذا المشروع مرخص بموجب ترخيص MIT. انظر ملف `LICENSE` لمزيد من التفاصيل.
\`\`\`

\`\`\`plaintext file=".gitignore"
# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
/.pnpm-store
/.yarn/cache
/.yarn/unplugged

# testing
/coverage

# production
/build
/.next
/out
/dist

# misc
.DS_Store
*.pem
npm-debug.log*
yarn-debug.log*
yarn-error.log*
.pnpm-debug.log*
.env*.local
.vercel
.turbo
