    //adicionando lista pelo button no database firestore
    const lido_button = document.getElementById('HP1_lido');     
    lido_button.addEventListener('click', function(){
        const lido_button = "Harry Potter e a Pedra Filosofal";
        let id = counter += 1;
        auth.onAuthStateChanged(user => {
            if(user) {
                fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                    id: '_' + id, 
                    lido_button
                }).then ( () => {
                    alert('livro adicionado');
                }).catch(err => {
                    console.log(err.message);
                })
            }
            else {
                //console.log('user is not signed in to add books');
            }
        })
    })

        //adicionando lista pelo button no database firestore
        const HP2_lido = document.getElementById('HP2_lido');     
        HP2_lido.addEventListener('click', function(){
            const HP2_lido = "Harry Potter e o Cálice de Fogo";
            let id = counter += 1;
            auth.onAuthStateChanged(user => {
                if(user) {
                    fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                        id: '_' + id, 
                        HP2_lido
                    }).then ( () => {
                        alert('Harry Potter e o Cálice de Fogo adicionado à lista de lidos');
                    }).catch(err => {
                        console.log(err.message);
                    })
                }
                else {
                    //console.log('user is not signed in to add books');
                }
            })
        })

        //adicionando lista pelo button no database firestore
        const HP3_lido = document.getElementById('HP3_lido');     
        HP3_lido.addEventListener('click', function(){
            const HP3_lido = "Harry Potter e a Câmara Secreta";
            let id = counter += 1;
            auth.onAuthStateChanged(user => {
                if(user) {
                    fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                        id: '_' + id, 
                        HP3_lido
                    }).then ( () => {
                        alert('Harry Potter e a Câmara Secreta adicionado à lista de lidos');
                    }).catch(err => {
                        console.log(err.message);
                    })
                }
                else {
                    //console.log('user is not signed in to add books');
                }
            })
        })

        //adicionando lista pelo button no database firestore
        const HP4_lido = document.getElementById('HP4_lido');     
        HP4_lido.addEventListener('click', function(){
            const HP4_lido = "Harry Potter e a Ordem da Fênix";
            let id = counter += 1;
            auth.onAuthStateChanged(user => {
                if(user) {
                    fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                        id: '_' + id, 
                        HP4_lido
                    }).then ( () => {
                        alert('Harry Potter e a Ordem da Fênix adicionado à lista de lidos');
                    }).catch(err => {
                        console.log(err.message);
                    })
                }
                else {
                    //console.log('user is not signed in to add books');
                }
            })
        })

        //adicionando lista pelo button no database firestore
        const HP5_lido = document.getElementById('HP5_lido');     
        HP5_lido.addEventListener('click', function(){
            const HP5_lido = "Harry Potter e o Prisioneiro de Azkaban";
            let id = counter += 1;
            auth.onAuthStateChanged(user => {
                if(user) {
                    fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                        id: '_' + id, 
                        HP5_lido
                    }).then ( () => {
                        alert('Harry Potter e o Prisioneiro de Azkaban adicionado à lista de lidos');
                    }).catch(err => {
                        console.log(err.message);
                    })
                }
                else {
                    //console.log('user is not signed in to add books');
                }
            })
        })

        //adicionando lista pelo button no database firestore
        const HP6_lido = document.getElementById('HP6_lido');     
        HP6_lido.addEventListener('click', function(){
            const HP6_lido = "Harry Potter e as Relíquias da Morte";
            let id = counter += 1;
            auth.onAuthStateChanged(user => {
                if(user) {
                    fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                        id: '_' + id, 
                        HP6_lido
                    }).then ( () => {
                        alert('Harry Potter e as Relíquias da Morte adicionado à lista de lidos');
                    }).catch(err => {
                        console.log(err.message);
                    })
                }
                else {
                    //console.log('user is not signed in to add books');
                }
            })
        })

        //adicionando lista pelo button no database firestore
        const HP7_lido = document.getElementById('HP7_lido');     
        HP7_lido.addEventListener('click', function(){
            const HP7_lido = "Harry Potter e o Enígma do Príncipe";
            let id = counter += 1;
            auth.onAuthStateChanged(user => {
                if(user) {
                    fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                        id: '_' + id, 
                        HP7_lido
                    }).then ( () => {
                        alert('Harry Potter e o Enígma do Príncipe adicionado à lista de lidos');
                    }).catch(err => {
                        console.log(err.message);
                    })
                }
                else {
                    //console.log('user is not signed in to add books');
                }
            })
        })

         //adicionando Torto Arado pelo button no database firestore
     const tortoArado_lido = document.getElementById('tortoArado_lido');
     tortoArado_lido.addEventListener('click', function(){
         const tortoArado_lido = "Torto Arado";
     let id = counter += 1; 
     auth.onAuthStateChanged(user => {
         if(user) {
             fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                 id: '_' + id, 
                 tortoArado_lido
             }).then ( () => {
                 alert('Torto Arado adicionado à lista de lidos'); 
             }).catch(err => {
                 console.log(err.message);
             })
         }else {
             //console.log('user is not signed in to add livros')
         }
     })
     })

     //adicionando O homem mais rico da babilônia pelo button no database firestore
     const homemBabilonia_lido = document.getElementById('homemBabilonia_lido');
     homemBabilonia_lido.addEventListener('click', function(){
         const homemBabilonia_lido = "O homem mais rico da babilônia";
     let id = counter += 1; 
     auth.onAuthStateChanged(user => {
         if(user) {
             fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                 id: '_' + id, 
                 homemBabilonia_lido
             }).then ( () => {
                 alert('O homem mais rico da babilônia adicionado à lista de lidos'); 
             }).catch(err => {
                 console.log(err.message);
             })
         }else {
             //console.log('user is not signed in to add livros')
         }
     })
     })

      //adicionando A garota do lago pelo button no database firestore
      const garotaLago_lido = document.getElementById('garotaLago_lido');
      garotaLago_lido.addEventListener('click', function(){
          const garotaLago_lido = "A garota do lago";
      let id = counter += 1; 
      auth.onAuthStateChanged(user => {
          if(user) {
              fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                  id: '_' + id, 
                  garotaLago_lido
              }).then ( () => {
                  alert('A garota do lago adicionado à lista de lidos'); 
              }).catch(err => {
                  console.log(err.message);
              })
          }else {
              //console.log('user is not signed in to add livros')
          }
      })
      })

       //adicionando Mulheres que correm com os lobos pelo button no database firestore
       const mulheresLobo_lido = document.getElementById('mulheresLobo_lido');
       mulheresLobo_lido.addEventListener('click', function(){
           const mulheresLobo_lido = "Mulheres que correm com os lobos";
       let id = counter += 1; 
       auth.onAuthStateChanged(user => {
           if(user) {
               fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                   id: '_' + id, 
                   mulheresLobo_lido
               }).then ( () => {
                   alert('Mulheres que correm com os lobos adicionado à lista de lidos'); 
               }).catch(err => {
                   console.log(err.message);
               })
           }else {
               //console.log('user is not signed in to add livros')
           }
       })
       })

       //adicionando Percy Jackson - O ladrão de raios pelo button no database firestore
       const PJ1_lido = document.getElementById('PJ1_lido');
       PJ1_lido.addEventListener('click', function(){
           const PJ1_lido = "Percy Jackson - O ladrão de raios";
       let id = counter += 1; 
       auth.onAuthStateChanged(user => {
           if(user) {
               fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                   id: '_' + id, 
                   PJ1_lido
               }).then ( () => {
                   alert('Percy Jackson - O ladrão de raios adicionado à lista de lidos'); 
               }).catch(err => {
                   console.log(err.message);
               })
           }else {
               //console.log('user is not signed in to add livros')
           }
       })
       })

       //adicionando  Percy Jackson - O mar de monstros pelo button no database firestore
       const PJ2_lido = document.getElementById('PJ2_lido');
       PJ2_lido.addEventListener('click', function(){
           const PJ2_lido = "Percy Jackson - O mar de monstros";
       let id = counter += 1; 
       auth.onAuthStateChanged(user => {
           if(user) {
               fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                   id: '_' + id, 
                   PJ2_lido
               }).then ( () => {
                   alert('Percy Jackson - O mar de monstros adicionado à lista de lidos'); 
               }).catch(err => {
                   console.log(err.message);
               })
           }else {
               //console.log('user is not signed in to add livros')
           }
       })
       })

       //adicionando  Percy Jackson - A maldição do Titã pelo button no database firestore
       const PJ3_lido = document.getElementById('PJ3_lido');
       PJ3_lido.addEventListener('click', function(){
           const PJ3_lido = "Percy Jackson - A maldição do Titã";
       let id = counter += 1; 
       auth.onAuthStateChanged(user => {
           if(user) {
               fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                   id: '_' + id, 
                   PJ3_lido
               }).then ( () => {
                   alert('Percy Jackson - A maldição do Titã adicionado à lista de lidos'); 
               }).catch(err => {
                   console.log(err.message);
               })
           }else {
               //console.log('user is not signed in to add livros')
           }
       })
       })

         //adicionando  Percy Jackson - A batalha do labirinto pelo button no database firestore
         const PJ4_lido = document.getElementById('PJ4_lido');
         PJ4_lido.addEventListener('click', function(){
             const PJ4_lido = "Percy Jackson - A batalha do labirinto";
         let id = counter += 1; 
         auth.onAuthStateChanged(user => {
             if(user) {
                 fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                     id: '_' + id, 
                     PJ4_lido
                 }).then ( () => {
                     alert('Percy Jackson - A batalha do labirinto adicionado à lista de lidos'); 
                 }).catch(err => {
                     console.log(err.message);
                 })
             }else {
                 //console.log('user is not signed in to add livros')
             }
         })
         })

          //adicionando  Percy Jackson - O último olimpiano pelo button no database firestore
          const PJ5_lido = document.getElementById('PJ5_lido');
          PJ5_lido.addEventListener('click', function(){
              const PJ5_lido = "Percy Jackson - O último olimpiano";
          let id = counter += 1; 
          auth.onAuthStateChanged(user => {
              if(user) {
                  fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                      id: '_' + id, 
                      PJ5_lido
                  }).then ( () => {
                      alert('Percy Jackson - O último olimpiano adicionado à lista de lidos'); 
                  }).catch(err => {
                      console.log(err.message);
                  })
              }else {
                  //console.log('user is not signed in to add livros')
              }
          })
          })

           //adicionando  A revolução dos bichos pelo button no database firestore
           const revolucaoBichos_lido = document.getElementById('revolucaoBichos_lido');
           revolucaoBichos_lido.addEventListener('click', function(){
               const revolucaoBichos_lido = "A revolução dos bichos";
           let id = counter += 1; 
           auth.onAuthStateChanged(user => {
               if(user) {
                   fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                       id: '_' + id, 
                       revolucaoBichos_lido
                   }).then ( () => {
                       alert('A revolução dos bichos adicionado à lista de lidos'); 
                   }).catch(err => {
                       console.log(err.message);
                   })
               }else {
                   //console.log('user is not signed in to add livros')
               }
           })
           })

           //adicionando 1984 pelo button no database firestore
           const livro1984_lido = document.getElementById('livro1984_lido');
           livro1984_lido.addEventListener('click', function(){
               const livro1984_lido = "A revolução dos bichos";
           let id = counter += 1; 
           auth.onAuthStateChanged(user => {
               if(user) {
                   fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                       id: '_' + id, 
                       livro1984_lido
                   }).then ( () => {
                       alert('A revolução dos bichos adicionado à lista de lidos'); 
                   }).catch(err => {
                       console.log(err.message);
                   })
               }else {
                   //console.log('user is not signed in to add livros')
               }
           })
           })

            //adicionando O conto da aia pelo button no database firestore
            const handmaids_lido = document.getElementById('handmaids_lido');
            handmaids_lido.addEventListener('click', function(){
                const handmaids_lido = "O conto da aia";
            let id = counter += 1; 
            auth.onAuthStateChanged(user => {
                if(user) {
                    fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                        id: '_' + id, 
                        handmaids_lido
                    }).then ( () => {
                        alert('O conto da aia adicionado à lista de lidos'); 
                    }).catch(err => {
                        console.log(err.message);
                    })
                }else {
                    //console.log('user is not signed in to add livros')
                }
            })
            })

            //adicionando O milagre da manhã pelo button no database firestore
            const milagreManha_lido = document.getElementById('milagreManha_lido');
            milagreManha_lido.addEventListener('click', function(){
                const milagreManha_lido = "O milagre da manhã";
            let id = counter += 1; 
            auth.onAuthStateChanged(user => {
                if(user) {
                    fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                        id: '_' + id, 
                        milagreManha_lido
                    }).then ( () => {
                        alert('O milagre da manhã adicionado à lista de lidos'); 
                    }).catch(err => {
                        console.log(err.message);
                    })
                }else {
                    //console.log('user is not signed in to add livros')
                }
            })
            })

             //adicionando O poder da ação pelo button no database firestore
             const poderAcao_lido = document.getElementById('poderAcao_lido');
             poderAcao_lido.addEventListener('click', function(){
                 const poderAcao_lido = "O poder da ação";
             let id = counter += 1; 
             auth.onAuthStateChanged(user => {
                 if(user) {
                     fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                         id: '_' + id, 
                         poderAcao_lido
                     }).then ( () => {
                         alert('O poder da ação adicionado à lista de lidos'); 
                     }).catch(err => {
                         console.log(err.message);
                     })
                 }else {
                     //console.log('user is not signed in to add livros')
                 }
             })
             })

             //adicionando Mindset: a nova psicologia do sucesso pelo button no database firestore
             const mindset_lido = document.getElementById('mindset_lido');
             mindset_lido.addEventListener('click', function(){
                 const mindset_lido = "Mindset: a nova psicologia do sucesso";
             let id = counter += 1; 
             auth.onAuthStateChanged(user => {
                 if(user) {
                     fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                         id: '_' + id, 
                         mindset_lido
                     }).then ( () => {
                         alert('Mindset: a nova psicologia do sucesso adicionado à lista de lidos'); 
                     }).catch(err => {
                         console.log(err.message);
                     })
                 }else {
                     //console.log('user is not signed in to add livros')
                 }
             })
             })

              //adicionando O poder do hábito pelo button no database firestore
              const poderHabito_lido = document.getElementById('poderHabito_lido');
              poderHabito_lido.addEventListener('click', function(){
                  const poderHabito_lido = "O poder do hábito";
              let id = counter += 1; 
              auth.onAuthStateChanged(user => {
                  if(user) {
                      fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                          id: '_' + id, 
                          poderHabito_lido
                      }).then ( () => {
                          alert('O poder do hábito adicionado à lista de lidos'); 
                      }).catch(err => {
                          console.log(err.message);
                      })
                  }else {
                      //console.log('user is not signed in to add livros')
                  }
              })
              })

              //adicionando A sutil arte de ligar o foda-se pelo button no database firestore
              const sutilArte_lido = document.getElementById('sutilArte_lido');
              sutilArte_lido.addEventListener('click', function(){
                  const sutilArte_lido = "A sutil arte de ligar o foda-se";
              let id = counter += 1; 
              auth.onAuthStateChanged(user => {
                  if(user) {
                      fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                          id: '_' + id, 
                          sutilArte_lido
                      }).then ( () => {
                          alert('A sutil arte de ligar o foda-se adicionado à lista de lidos'); 
                      }).catch(err => {
                          console.log(err.message);
                      })
                  }else {
                      //console.log('user is not signed in to add livros')
                  }
              })
              })

              //adicionando Pequeno manual antirracista pelo button no database firestore
              const manualAntirracista_lido = document.getElementById('manualAntirracista_lido');
              manualAntirracista_lido.addEventListener('click', function(){
                  const manualAntirracista_lido = "Pequeno manual antirracista";
              let id = counter += 1; 
              auth.onAuthStateChanged(user => {
                  if(user) {
                      fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                          id: '_' + id, 
                          manualAntirracista_lido
                      }).then ( () => {
                          alert('Pequeno manual antirracista adicionado à lista de lido'); 
                      }).catch(err => {
                          console.log(err.message);
                      })
                  }else {
                      //console.log('user is not signed in to add livros')
                  }
              })
              })

              //adicionando A coragem de ser imperfeitoa pelo button no database firestore
              const coragemImperfeito_lido = document.getElementById('coragemImperfeito_lido');
              coragemImperfeito_lido.addEventListener('click', function(){
                  const coragemImperfeito_lido = "A coragem de ser imperfeito";
              let id = counter += 1; 
              auth.onAuthStateChanged(user => {
                  if(user) {
                      fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                          id: '_' + id, 
                          coragemImperfeito_lido
                      }).then ( () => {
                          alert('A coragem de ser imperfeito adicionado à lista de lidos'); 
                      }).catch(err => {
                          console.log(err.message);
                      })
                  }else {
                      //console.log('user is not signed in to add livros')
                  }
              })
              })

              //adicionando Mentirosos pelo button no database firestore
              const mentirosos_lido = document.getElementById('mentirosos_lido');
              mentirosos_lido.addEventListener('click', function(){
                  const mentirosos_lido = "Mentirosos";
              let id = counter += 1; 
              auth.onAuthStateChanged(user => {
                  if(user) {
                      fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                          id: '_' + id, 
                          mentirosos_lido
                      }).then ( () => {
                          alert('Mentirosos adicionado à lista de lidos'); 
                      }).catch(err => {
                          console.log(err.message);
                      })
                  }else {
                      //console.log('user is not signed in to add livros')
                  }
              })
              })

              //adicionando O morro dos ventos uivantes pelo button no database firestore
              const ventosUivantes_lido = document.getElementById('ventosUivantes_lido');
              ventosUivantes_lido.addEventListener('click', function(){
                  const ventosUivantes_lido = "O morro dos ventos uivantes";
              let id = counter += 1; 
              auth.onAuthStateChanged(user => {
                  if(user) {
                      fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                          id: '_' + id, 
                          ventosUivantes_lido
                      }).then ( () => {
                          alert('O morro dos ventos uivantes adicionado à lista de lidos'); 
                      }).catch(err => {
                          console.log(err.message);
                      })
                  }else {
                      //console.log('user is not signed in to add livros')
                  }
              })
              })

               //adicionando Orgulho e Preconceito pelo button no database firestore
               const orgulhoPreconceito_lido = document.getElementById('orgulhoPreconceito_lido');
               orgulhoPreconceito_lido.addEventListener('click', function(){
                   const orgulhoPreconceito_lido = "Orgulho e Preconceito";
               let id = counter += 1; 
               auth.onAuthStateChanged(user => {
                   if(user) {
                       fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                           id: '_' + id, 
                           orgulhoPreconceito_lido
                       }).then ( () => {
                           alert('Orgulho e Preconceito adicionado à lista de lidos'); 
                       }).catch(err => {
                           console.log(err.message);
                       })
                   }else {
                       //console.log('user is not signed in to add livros')
                   }
               })
               })

               //adicionando O iluminado pelo button no database firestore
               const iluminado_lido = document.getElementById('iluminado_lido');
               iluminado_lido.addEventListener('click', function(){
                   const iluminado_lido = "O iluminado";
               let id = counter += 1; 
               auth.onAuthStateChanged(user => {
                   if(user) {
                       fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                           id: '_' + id, 
                           iluminado_lido
                       }).then ( () => {
                           alert('O iluminado adicionado à lista de lidos'); 
                       }).catch(err => {
                           console.log(err.message);
                       })
                   }else {
                       //console.log('user is not signed in to add livros')
                   }
               })
               })

               //adicionando It: A coisa pelo button no database firestore
               const it_lido = document.getElementById('it_lido');
               it_lido.addEventListener('click', function(){
                   const it_lido = "It: A coisa";
               let id = counter += 1; 
               auth.onAuthStateChanged(user => {
                   if(user) {
                       fs.collection('Livros lidos' + ' ' + user.uid).doc('_' + id).set({
                           id: '_' + id, 
                           it_lido
                       }).then ( () => {
                           alert('It: A coisa adicionado à lista de lidos'); 
                       }).catch(err => {
                           console.log(err.message);
                       })
                   }else {
                       //console.log('user is not signed in to add livros')
                   }
               })
               })