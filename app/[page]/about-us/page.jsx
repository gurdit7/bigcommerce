import Footer from 'components/layout/footer';
import { Suspense } from 'react';

export default function AboutUs({children}) {
  return (
    <Suspense>
      <div className="w-full">
        <div className="mx-8 max-w-2xl py-20 sm:mx-auto text-white">
          <Suspense>Jai Jai {children}</Suspense>
        </div>
      </div>
      <Footer />
    </Suspense>
  );
}
