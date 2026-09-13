const fs = require('fs');
const path = 'src/app/resources/[slug]/page.tsx';
let code = fs.readFileSync(path, 'utf8');

const oldSidebarAndBottom = `                {blog.faqs && blog.faqs.length > 0 && (
                  <section className="mt-16 border-t border-gray-200 pt-12">
                    <h2 className="text-3xl font-black text-[#022B3A] mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                      {blog.faqs.map((faq: { question: string; answer: string }, i: number) => (
                        <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                          <h3 className="text-xl font-bold text-[#022B3A] mb-4">{faq.question}</h3>
                          <p className="text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
                
              </article>
            </div>

            {/* Right Sidebar - Sticky TOC & Form */}
            <aside className="lg:w-[35%] xl:w-[30%]">
              <div className="sticky top-28 space-y-8 pb-10">
                {tocItems.length > 0 && (
                  <TableOfContents items={tocItems} />
                )}
                
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                  <h3 className="text-xl font-black text-[#022B3A] mb-2">Need Guidance?</h3>
                  <p className="text-sm text-gray-600 mb-6 font-medium">Contact our Florida HVAC experts for a confidential discussion.</p>
                  <ContactForm buttonText="Send Message" />
                </div>
              </div>
            </aside>`;

const newSidebarAndBottom = `                {blog.faqs && blog.faqs.length > 0 && (
                  <section className="mt-16 border-t border-gray-200 pt-12">
                    <h2 className="text-3xl font-black text-[#022B3A] mb-8">Frequently Asked Questions</h2>
                    <div className="space-y-6">
                      {blog.faqs.map((faq: { question: string; answer: string }, i: number) => (
                        <div key={i} className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                          <h3 className="text-xl font-bold text-[#022B3A] mb-4">{faq.question}</h3>
                          <p className="text-gray-700 leading-relaxed font-medium">{faq.answer}</p>
                        </div>
                      ))}
                    </div>
                  </section>
                )}
                
              </article>
              
              {/* Contact Form at the end of the article */}
              <div className="mt-12 bg-white rounded-[2rem] shadow-sm border border-gray-100 p-8 md:p-12 mb-20">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-black text-[#022B3A] mb-4">Have More Questions?</h2>
                  <p className="text-lg text-gray-600 font-medium">Contact our Florida HVAC experts for a confidential discussion.</p>
                </div>
                <ContactForm buttonText="Send Confidential Message" />
              </div>
            </div>

            {/* Right Sidebar - Sticky TOC */}
            <aside className="lg:w-[35%] xl:w-[30%]">
              <div className="sticky top-28 space-y-8 pb-10">
                {tocItems.length > 0 && (
                  <TableOfContents items={tocItems} />
                )}
              </div>
            </aside>`;

code = code.replace(oldSidebarAndBottom, newSidebarAndBottom);
fs.writeFileSync(path, code, 'utf8');
