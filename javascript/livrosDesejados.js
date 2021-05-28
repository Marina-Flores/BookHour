    //adicionando HP1 pelo button no database firestore
    const desejo_button = document.getElementById('HP1_desejo');     
    desejo_button.addEventListener('click', function(){
        const desejo_button = "Harry Potter e a Pedra Filosofal";
        let id = counter += 1;
        auth.onAuthStateChanged(user => {
            if(user) {
                fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                    id: '_' + id, 
                    desejo_button
                }).then ( () => {
                    alert('livro adicionado');
                }).catch(err => {
                    console.log(err.message);
                })
            }
            else {
                //console.log('user is not signed in to add toods');
            }
        })
    })

    //adicionando HP2 pelo button no database firestore
    const desejo_hp2 = document.getElementById('HP2_desejo');
    desejo_hp2.addEventListener('click', function(){
        const desejo_hp2 = "Harry Potter e o Cálice de Fogo";
    let id = counter += 1; 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                id: '_' + id, 
                desejo_hp2
            }).then ( () => {
                alert('Livro adicionado'); 
            }).catch(err => {
                console.log(err.message);
            })
        }else {
            //console.log('user is not signed in to add livros')
        }
    })
    })

    //adicionando HP3 pelo button no database firestore
    const HP3_desejo = document.getElementById('HP3_desejo');
    HP3_desejo.addEventListener('click', function(){
        const HP3_desejo = "Harry Potter e a Câmara Secreta";
    let id = counter += 1; 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                id: '_' + id, 
                HP3_desejo
            }).then ( () => {
                alert('Harry Potter e a Câmara Secreta" adicionado à lista de desejos'); 
            }).catch(err => {
                console.log(err.message);
            })
        }else {
            //console.log('user is not signed in to add livros')
        }
    })
    })

    //adicionando HP4 pelo button no database firestore
    const HP4_desejo = document.getElementById('HP4_desejo');
    HP4_desejo.addEventListener('click', function(){
        const HP4_desejo = "Harry Potter e a Ordem da Fênix";
    let id = counter += 1; 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                id: '_' + id, 
                HP4_desejo
            }).then ( () => {
                alert('Harry Potter e a Ordem da Fênix adicionado à lista de desejos'); 
            }).catch(err => {
                console.log(err.message);
            })
        }else {
            //console.log('user is not signed in to add livros')
        }
    })
    })

    //adicionando HP5 pelo button no database firestore
    const HP5_desejo = document.getElementById('HP5_desejo');
    HP5_desejo.addEventListener('click', function(){
        const HP5_desejo = "Harry Potter e o Prisioneiro de Azkaban";
    let id = counter += 1; 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                id: '_' + id, 
                HP5_desejo
            }).then ( () => {
                alert('Harry Potter e o Prisioneiro de Azkaban adicionado à lista de desejos'); 
            }).catch(err => {
                console.log(err.message);
            })
        }else {
            //console.log('user is not signed in to add livros')
        }
    })
    })

    //adicionando HP6 pelo button no database firestore
    const HP6_desejo = document.getElementById('HP6_desejo');
    HP6_desejo.addEventListener('click', function(){
        const HP6_desejo = "Harry Potter e as Relíquias da Morte";
    let id = counter += 1; 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                id: '_' + id, 
                HP6_desejo
            }).then ( () => {
                alert('Harry Potter e as Relíquias da Morte adicionado à lista de desejos'); 
            }).catch(err => {
                console.log(err.message);
            })
        }else {
            //console.log('user is not signed in to add livros')
        }
    })
    })

    //adicionando HP7 pelo button no database firestore
    const HP7_desejo = document.getElementById('HP7_desejo');
    HP7_desejo.addEventListener('click', function(){
        const HP7_desejo = "Harry Potter e o Enígma do Príncipe";
    let id = counter += 1; 
    auth.onAuthStateChanged(user => {
        if(user) {
            fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                id: '_' + id, 
                HP7_desejo
            }).then ( () => {
                alert('Harry Potter e o Enígma do Príncipe adicionado à lista de desejos'); 
            }).catch(err => {
                console.log(err.message);
            })
        }else {
            //console.log('user is not signed in to add livros')
        }
    })
    })

     //adicionando Torto Arado pelo button no database firestore
     const tortoArado_desejo = document.getElementById('tortoArado_desejo');
     tortoArado_desejo.addEventListener('click', function(){
         const tortoArado_desejo = "Torto Arado";
     let id = counter += 1; 
     auth.onAuthStateChanged(user => {
         if(user) {
             fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                 id: '_' + id, 
                 tortoArado_desejo
             }).then ( () => {
                 alert('Torto Arado adicionado à lista de desejos'); 
             }).catch(err => {
                 console.log(err.message);
             })
         }else {
             //console.log('user is not signed in to add livros')
         }
     })
     })

     //adicionando O homem mais rico da babilônia pelo button no database firestore
     const homemBabilonia_desejo = document.getElementById('homemBabilonia_desejo');
     homemBabilonia_desejo.addEventListener('click', function(){
         const homemBabilonia_desejo = "O homem mais rico da babilônia";
     let id = counter += 1; 
     auth.onAuthStateChanged(user => {
         if(user) {
             fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                 id: '_' + id, 
                 homemBabilonia_desejo
             }).then ( () => {
                 alert('O homem mais rico da babilônia adicionado à lista de desejos'); 
             }).catch(err => {
                 console.log(err.message);
             })
         }else {
             //console.log('user is not signed in to add livros')
         }
     })
     })

      //adicionando A garota do lago pelo button no database firestore
      const garotaLago_desejo = document.getElementById('garotaLago_desejo');
      garotaLago_desejo.addEventListener('click', function(){
          const garotaLago_desejo = "A garota do lago";
      let id = counter += 1; 
      auth.onAuthStateChanged(user => {
          if(user) {
              fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                  id: '_' + id, 
                  garotaLago_desejo
              }).then ( () => {
                  alert('A garota do lago adicionado à lista de desejos'); 
              }).catch(err => {
                  console.log(err.message);
              })
          }else {
              //console.log('user is not signed in to add livros')
          }
      })
      })

       //adicionando Mulheres que correm com os lobos pelo button no database firestore
       const mulheresLobo_desejo = document.getElementById('mulheresLobo_desejo');
       mulheresLobo_desejo.addEventListener('click', function(){
           const mulheresLobo_desejo = "Mulheres que correm com os lobos";
       let id = counter += 1; 
       auth.onAuthStateChanged(user => {
           if(user) {
               fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                   id: '_' + id, 
                   mulheresLobo_desejo
               }).then ( () => {
                   alert('Mulheres que correm com os lobos adicionado à lista de desejos'); 
               }).catch(err => {
                   console.log(err.message);
               })
           }else {
               //console.log('user is not signed in to add livros')
           }
       })
       })

       //adicionando Percy Jackson - O ladrão de raios pelo button no database firestore
       const PJ1_desejo = document.getElementById('PJ1_desejo');
       PJ1_desejo.addEventListener('click', function(){
           const PJ1_desejo = "Percy Jackson - O ladrão de raios";
       let id = counter += 1; 
       auth.onAuthStateChanged(user => {
           if(user) {
               fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                   id: '_' + id, 
                   PJ1_desejo
               }).then ( () => {
                   alert('Percy Jackson - O ladrão de raios adicionado à lista de desejos'); 
               }).catch(err => {
                   console.log(err.message);
               })
           }else {
               //console.log('user is not signed in to add livros')
           }
       })
       })

       //adicionando  Percy Jackson - O mar de monstros pelo button no database firestore
       const PJ2_desejo = document.getElementById('PJ2_desejo');
       PJ2_desejo.addEventListener('click', function(){
           const PJ2_desejo = "Percy Jackson - O mar de monstros";
       let id = counter += 1; 
       auth.onAuthStateChanged(user => {
           if(user) {
               fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                   id: '_' + id, 
                   PJ2_desejo
               }).then ( () => {
                   alert('Percy Jackson - O mar de monstros adicionado à lista de desejos'); 
               }).catch(err => {
                   console.log(err.message);
               })
           }else {
               //console.log('user is not signed in to add livros')
           }
       })
       })

       //adicionando  Percy Jackson - A maldição do Titã pelo button no database firestore
       const PJ3_desejo = document.getElementById('PJ3_desejo');
       PJ3_desejo.addEventListener('click', function(){
           const PJ3_desejo = "Percy Jackson - A maldição do Titã";
       let id = counter += 1; 
       auth.onAuthStateChanged(user => {
           if(user) {
               fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                   id: '_' + id, 
                   PJ3_desejo
               }).then ( () => {
                   alert('Percy Jackson - A maldição do Titã adicionado à lista de desejos'); 
               }).catch(err => {
                   console.log(err.message);
               })
           }else {
               //console.log('user is not signed in to add livros')
           }
       })
       })

         //adicionando  Percy Jackson - A batalha do labirinto pelo button no database firestore
         const PJ4_desejo = document.getElementById('PJ4_desejo');
         PJ4_desejo.addEventListener('click', function(){
             const PJ4_desejo = "Percy Jackson - A batalha do labirinto";
         let id = counter += 1; 
         auth.onAuthStateChanged(user => {
             if(user) {
                 fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                     id: '_' + id, 
                     PJ4_desejo
                 }).then ( () => {
                     alert('Percy Jackson - A batalha do labirinto adicionado à lista de desejos'); 
                 }).catch(err => {
                     console.log(err.message);
                 })
             }else {
                 //console.log('user is not signed in to add livros')
             }
         })
         })

          //adicionando  Percy Jackson - O último olimpiano pelo button no database firestore
          const PJ5_desejo = document.getElementById('PJ5_desejo');
          PJ5_desejo.addEventListener('click', function(){
              const PJ5_desejo = "Percy Jackson - O último olimpiano";
          let id = counter += 1; 
          auth.onAuthStateChanged(user => {
              if(user) {
                  fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                      id: '_' + id, 
                      PJ5_desejo
                  }).then ( () => {
                      alert('Percy Jackson - O último olimpiano adicionado à lista de desejos'); 
                  }).catch(err => {
                      console.log(err.message);
                  })
              }else {
                  //console.log('user is not signed in to add livros')
              }
          })
          })

           //adicionando  A revolução dos bichos pelo button no database firestore
           const revolucaoBichos_desejo = document.getElementById('revolucaoBichos_desejo');
           revolucaoBichos_desejo.addEventListener('click', function(){
               const revolucaoBichos_desejo = "A revolução dos bichos";
           let id = counter += 1; 
           auth.onAuthStateChanged(user => {
               if(user) {
                   fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                       id: '_' + id, 
                       revolucaoBichos_desejo
                   }).then ( () => {
                       alert('A revolução dos bichos adicionado à lista de desejos'); 
                   }).catch(err => {
                       console.log(err.message);
                   })
               }else {
                   //console.log('user is not signed in to add livros')
               }
           })
           })

           //adicionando 1984 pelo button no database firestore
           const livro1984_desejo = document.getElementById('livro1984_desejo');
           livro1984_desejo.addEventListener('click', function(){
               const livro1984_desejo = "A revolução dos bichos";
           let id = counter += 1; 
           auth.onAuthStateChanged(user => {
               if(user) {
                   fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                       id: '_' + id, 
                       livro1984_desejo
                   }).then ( () => {
                       alert('A revolução dos bichos adicionado à lista de desejos'); 
                   }).catch(err => {
                       console.log(err.message);
                   })
               }else {
                   //console.log('user is not signed in to add livros')
               }
           })
           })

            //adicionando O conto da aia pelo button no database firestore
            const handmaids_desejo = document.getElementById('handmaids_desejo');
            handmaids_desejo.addEventListener('click', function(){
                const handmaids_desejo = "O conto da aia";
            let id = counter += 1; 
            auth.onAuthStateChanged(user => {
                if(user) {
                    fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                        id: '_' + id, 
                        handmaids_desejo
                    }).then ( () => {
                        alert('O conto da aia adicionado à lista de desejos'); 
                    }).catch(err => {
                        console.log(err.message);
                    })
                }else {
                    //console.log('user is not signed in to add livros')
                }
            })
            })

            //adicionando O milagre da manhã pelo button no database firestore
            const milagreManha_desejo = document.getElementById('milagreManha_desejo');
            milagreManha_desejo.addEventListener('click', function(){
                const milagreManha_desejo = "O milagre da manhã";
            let id = counter += 1; 
            auth.onAuthStateChanged(user => {
                if(user) {
                    fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                        id: '_' + id, 
                        milagreManha_desejo
                    }).then ( () => {
                        alert('O milagre da manhã adicionado à lista de desejos'); 
                    }).catch(err => {
                        console.log(err.message);
                    })
                }else {
                    //console.log('user is not signed in to add livros')
                }
            })
            })

             //adicionando O poder da ação pelo button no database firestore
             const poderAcao_desejo = document.getElementById('poderAcao_desejo');
             poderAcao_desejo.addEventListener('click', function(){
                 const poderAcao_desejo = "O poder da ação";
             let id = counter += 1; 
             auth.onAuthStateChanged(user => {
                 if(user) {
                     fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                         id: '_' + id, 
                         poderAcao_desejo
                     }).then ( () => {
                         alert('O poder da ação adicionado à lista de desejos'); 
                     }).catch(err => {
                         console.log(err.message);
                     })
                 }else {
                     //console.log('user is not signed in to add livros')
                 }
             })
             })

             //adicionando Mindset: a nova psicologia do sucesso pelo button no database firestore
             const mindset_desejo = document.getElementById('mindset_desejo');
             mindset_desejo.addEventListener('click', function(){
                 const mindset_desejo = "Mindset: a nova psicologia do sucesso";
             let id = counter += 1; 
             auth.onAuthStateChanged(user => {
                 if(user) {
                     fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                         id: '_' + id, 
                         mindset_desejo
                     }).then ( () => {
                         alert('Mindset: a nova psicologia do sucesso adicionado à lista de desejos'); 
                     }).catch(err => {
                         console.log(err.message);
                     })
                 }else {
                     //console.log('user is not signed in to add livros')
                 }
             })
             })

              //adicionando O poder do hábito pelo button no database firestore
              const poderHabito_desejo = document.getElementById('poderHabito_desejo');
              poderHabito_desejo.addEventListener('click', function(){
                  const poderHabito_desejo = "O poder do hábito";
              let id = counter += 1; 
              auth.onAuthStateChanged(user => {
                  if(user) {
                      fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                          id: '_' + id, 
                          poderHabito_desejo
                      }).then ( () => {
                          alert('O poder do hábito adicionado à lista de desejos'); 
                      }).catch(err => {
                          console.log(err.message);
                      })
                  }else {
                      //console.log('user is not signed in to add livros')
                  }
              })
              })

              //adicionando A sutil arte de ligar o foda-se pelo button no database firestore
              const sutilArte_desejo = document.getElementById('sutilArte_desejo');
              sutilArte_desejo.addEventListener('click', function(){
                  const sutilArte_desejo = "A sutil arte de ligar o foda-se";
              let id = counter += 1; 
              auth.onAuthStateChanged(user => {
                  if(user) {
                      fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                          id: '_' + id, 
                          sutilArte_desejo
                      }).then ( () => {
                          alert('A sutil arte de ligar o foda-se adicionado à lista de desejos'); 
                      }).catch(err => {
                          console.log(err.message);
                      })
                  }else {
                      //console.log('user is not signed in to add livros')
                  }
              })
              })

              //adicionando Pequeno manual antirracista pelo button no database firestore
              const manualAntirracista_desejo = document.getElementById('manualAntirracista_desejo');
              manualAntirracista_desejo.addEventListener('click', function(){
                  const manualAntirracista_desejo = "Pequeno manual antirracista";
              let id = counter += 1; 
              auth.onAuthStateChanged(user => {
                  if(user) {
                      fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                          id: '_' + id, 
                          manualAntirracista_desejo
                      }).then ( () => {
                          alert('Pequeno manual antirracista adicionado à lista de desejos'); 
                      }).catch(err => {
                          console.log(err.message);
                      })
                  }else {
                      //console.log('user is not signed in to add livros')
                  }
              })
              })

              //adicionando A coragem de ser imperfeitoa pelo button no database firestore
              const coragemImperfeito_desejo = document.getElementById('coragemImperfeito_desejo');
              coragemImperfeito_desejo.addEventListener('click', function(){
                  const coragemImperfeito_desejo = "A coragem de ser imperfeito";
              let id = counter += 1; 
              auth.onAuthStateChanged(user => {
                  if(user) {
                      fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                          id: '_' + id, 
                          coragemImperfeito_desejo
                      }).then ( () => {
                          alert('A coragem de ser imperfeito adicionado à lista de desejos'); 
                      }).catch(err => {
                          console.log(err.message);
                      })
                  }else {
                      //console.log('user is not signed in to add livros')
                  }
              })
              })

              //adicionando A coragem de ser imperfeitoa pelo button no database firestore
              const mentirosos_desejo = document.getElementById('mentirosos_desejo');
              mentirosos_desejo.addEventListener('click', function(){
                  const mentirosos_desejo = "Mentirosos";
              let id = counter += 1; 
              auth.onAuthStateChanged(user => {
                  if(user) {
                      fs.collection('Livros desejados' + user.uid).doc('_' + id).set({
                          id: '_' + id, 
                          mentirosos_desejo
                      }).then ( () => {
                          alert('Mentirosos adicionado à lista de desejos'); 
                      }).catch(err => {
                          console.log(err.message);
                      })
                  }else {
                      //console.log('user is not signed in to add livros')
                  }
              })
              })