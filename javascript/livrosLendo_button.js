    //adicionando lista pelo button no database firestore
    const lendo_button = document.getElementById('HP1_lendo');     
    lendo_button.addEventListener('click', function(){
        const lendo_button = "Harry Potter e a Pedra Filosofal";
        let id = counter += 1;
        auth.onAuthStateChanged(user => {
            if(user) {
                fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                    id: '_' + id, 
                    lendo_button
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

    //adicionando hp2 pelo button no database firestore
    const HP2_lendo = document.getElementById('HP2_lendo'); 
    HP2_lendo.addEventListener('click', function(){
        const HP2_lendo = "Harry Potter e o Cálice de Fogo";
        let id = counter += 1;
        auth.onAuthStateChanged(user => {
            if(user){
                fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                    id: '_' + id, 
                    HP2_lendo
                }).then ( () => {
                    alert('Harry Potter e o Cálice de fogo adicionado à lista de Livros lendo');
                }).catch(err => {
                    console.log(err.message);
                })
            }else {
                //console.log('user is not signed in to add books')
            }
        }) 
    })

      //adicionando hp3 pelo button no database firestore
      const HP3_lendo = document.getElementById('HP3_lendo'); 
      HP3_lendo.addEventListener('click', function(){
          const HP3_lendo = "Harry Potter e a Câmara Secreta";
          let id = counter += 1;
          auth.onAuthStateChanged(user => {
              if(user){
                  fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                      id: '_' + id, 
                      HP3_lendo
                  }).then ( () => {
                      alert('Harry Potter e a Câmara Secreta adicionado à lista de Livros lendo');
                  }).catch(err => {
                      console.log(err.message);
                  })
              }else {
                  //console.log('user is not signed in to add books')
              }
          }) 
      })

      //adicionando hp4 pelo button no database firestore
      const HP4_lendo = document.getElementById('HP4_lendo'); 
      HP4_lendo.addEventListener('click', function(){
          const HP4_lendo = "Harry Potter e a Ordem da Fênix";
          let id = counter += 1;
          auth.onAuthStateChanged(user => {
              if(user){
                  fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                      id: '_' + id, 
                      HP4_lendo
                  }).then ( () => {
                      alert('Harry Potter e a Ordem da Fênix adicionado à lista de Livros lendo');
                  }).catch(err => {
                      console.log(err.message);
                  })
              }else {
                  //console.log('user is not signed in to add books')
              }
          }) 
      })

      //adicionando hp5 pelo button no database firestore
      const HP5_lendo = document.getElementById('HP5_lendo'); 
      HP5_lendo.addEventListener('click', function(){
          const HP5_lendo = "Harry Potter e o Prisioneiro de Azkaban";
          let id = counter += 1;
          auth.onAuthStateChanged(user => {
              if(user){
                  fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                      id: '_' + id, 
                      HP5_lendo
                  }).then ( () => {
                      alert('Harry Potter e o Prisioneiro de Azkaban adicionado à lista de Livros lendo');
                  }).catch(err => {
                      console.log(err.message);
                  })
              }else {
                  //console.log('user is not signed in to add books')
              }
          }) 
      })

       //adicionando hp6 pelo button no database firestore
       const HP6_lendo = document.getElementById('HP6_lendo'); 
       HP6_lendo.addEventListener('click', function(){
           const HP6_lendo = "Harry Potter e as Relíquias da Morte";
           let id = counter += 1;
           auth.onAuthStateChanged(user => {
               if(user){
                   fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                       id: '_' + id, 
                       HP6_lendo
                   }).then ( () => {
                       alert('Harry Potter e as Relíquias da Morte adicionado à lista de Livros lendo');
                   }).catch(err => {
                       console.log(err.message);
                   })
               }else {
                   //console.log('user is not signed in to add books')
               }
           }) 
       })

       //adicionando hp7 pelo button no database firestore
       const HP7_lendo = document.getElementById('HP7_lendo'); 
       HP7_lendo.addEventListener('click', function(){
           const HP7_lendo = "Harry Potter e o Enígma do Príncipe";
           let id = counter += 1;
           auth.onAuthStateChanged(user => {
               if(user){
                   fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                       id: '_' + id, 
                       HP7_lendo
                   }).then ( () => {
                       alert('Harry Potter e o Enígma do Príncipe adicionado à lista de Livros lendo');
                   }).catch(err => {
                       console.log(err.message);
                   })
               }else {
                   //console.log('user is not signed in to add books')
               }
           }) 
       })

       //adicionando Torto Arado pelo button no database firestore
     const tortoArado_lendo = document.getElementById('tortoArado_lendo');
     tortoArado_lendo.addEventListener('click', function(){
         const tortoArado_lendo = "Torto Arado";
     let id = counter += 1; 
     auth.onAuthStateChanged(user => {
         if(user) {
             fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                 id: '_' + id, 
                 tortoArado_lendo
             }).then ( () => {
                 alert('Torto Arado adicionado à lista de lendo'); 
             }).catch(err => {
                 console.log(err.message);
             })
         }else {
             //console.log('user is not signed in to add livros')
         }
     })
     })

     //adicionando O homem mais rico da babilônia pelo button no database firestore
     const homemBabilonia_lendo = document.getElementById('homemBabilonia_lendo');
     homemBabilonia_lendo.addEventListener('click', function(){
         const homemBabilonia_lendo = "O homem mais rico da babilônia";
     let id = counter += 1; 
     auth.onAuthStateChanged(user => {
         if(user) {
             fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                 id: '_' + id, 
                 homemBabilonia_lendo
             }).then ( () => {
                 alert('O homem mais rico da babilônia adicionado à lista de lendo'); 
             }).catch(err => {
                 console.log(err.message);
             })
         }else {
             //console.log('user is not signed in to add livros')
         }
     })
     })

      //adicionando A garota do lago pelo button no database firestore
      const garotaLago_lendo = document.getElementById('garotaLago_lendo');
      garotaLago_lendo.addEventListener('click', function(){
          const garotaLago_lendo = "A garota do lago";
      let id = counter += 1; 
      auth.onAuthStateChanged(user => {
          if(user) {
              fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                  id: '_' + id, 
                  garotaLago_lendo
              }).then ( () => {
                  alert('A garota do lago adicionado à lista de lendos'); 
              }).catch(err => {
                  console.log(err.message);
              })
          }else {
              //console.log('user is not signed in to add livros')
          }
      })
      })

       //adicionando Mulheres que correm com os lobos pelo button no database firestore
       const mulheresLobo_lendo = document.getElementById('mulheresLobo_lendo');
       mulheresLobo_lendo.addEventListener('click', function(){
           const mulheresLobo_lendo = "Mulheres que correm com os lobos";
       let id = counter += 1; 
       auth.onAuthStateChanged(user => {
           if(user) {
               fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                   id: '_' + id, 
                   mulheresLobo_lendo
               }).then ( () => {
                   alert('Mulheres que correm com os lobos adicionado à lista de lendo'); 
               }).catch(err => {
                   console.log(err.message);
               })
           }else {
               //console.log('user is not signed in to add livros')
           }
       })
       })

       //adicionando Percy Jackson - O ladrão de raios pelo button no database firestore
       const PJ1_lendo = document.getElementById('PJ1_lendo');
       PJ1_lendo.addEventListener('click', function(){
           const PJ1_lendo = "Percy Jackson - O ladrão de raios";
       let id = counter += 1; 
       auth.onAuthStateChanged(user => {
           if(user) {
               fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                   id: '_' + id, 
                   PJ1_lendo
               }).then ( () => {
                   alert('Percy Jackson - O ladrão de raios adicionado à lista de lendo'); 
               }).catch(err => {
                   console.log(err.message);
               })
           }else {
               //console.log('user is not signed in to add livros')
           }
       })
       })

       //adicionando  Percy Jackson - O mar de monstros pelo button no database firestore
       const PJ2_lendo = document.getElementById('PJ2_lendo');
       PJ2_lendo.addEventListener('click', function(){
           const PJ2_lendo = "Percy Jackson - O mar de monstros";
       let id = counter += 1; 
       auth.onAuthStateChanged(user => {
           if(user) {
               fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                   id: '_' + id, 
                   PJ2_lendo
               }).then ( () => {
                   alert('Percy Jackson - O mar de monstros adicionado à lista de lendo'); 
               }).catch(err => {
                   console.log(err.message);
               })
           }else {
               //console.log('user is not signed in to add livros')
           }
       })
       })

       //adicionando  Percy Jackson - A maldição do Titã pelo button no database firestore
       const PJ3_lendo = document.getElementById('PJ3_lendo');
       PJ3_lendo.addEventListener('click', function(){
           const PJ3_lendo = "Percy Jackson - A maldição do Titã";
       let id = counter += 1; 
       auth.onAuthStateChanged(user => {
           if(user) {
               fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                   id: '_' + id, 
                   PJ3_lendo
               }).then ( () => {
                   alert('Percy Jackson - A maldição do Titã adicionado à lista de lendo'); 
               }).catch(err => {
                   console.log(err.message);
               })
           }else {
               //console.log('user is not signed in to add livros')
           }
       })
       })

         //adicionando  Percy Jackson - A batalha do labirinto pelo button no database firestore
         const PJ4_lendo = document.getElementById('PJ4_lendo');
         PJ4_lendo.addEventListener('click', function(){
             const PJ4_lendo = "Percy Jackson - A batalha do labirinto";
         let id = counter += 1; 
         auth.onAuthStateChanged(user => {
             if(user) {
                 fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                     id: '_' + id, 
                     PJ4_lendo
                 }).then ( () => {
                     alert('Percy Jackson - A batalha do labirinto adicionado à lista de lendo'); 
                 }).catch(err => {
                     console.log(err.message);
                 })
             }else {
                 //console.log('user is not signed in to add livros')
             }
         })
         })

          //adicionando  Percy Jackson - O último olimpiano pelo button no database firestore
          const PJ5_lendo = document.getElementById('PJ5_lendo');
          PJ5_lendo.addEventListener('click', function(){
              const PJ5_lendo = "Percy Jackson - O último olimpiano";
          let id = counter += 1; 
          auth.onAuthStateChanged(user => {
              if(user) {
                  fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                      id: '_' + id, 
                      PJ5_lendo
                  }).then ( () => {
                      alert('Percy Jackson - O último olimpiano adicionado à lista de lendo'); 
                  }).catch(err => {
                      console.log(err.message);
                  })
              }else {
                  //console.log('user is not signed in to add livros')
              }
          })
          })

           //adicionando  A revolução dos bichos pelo button no database firestore
           const revolucaoBichos_lendo = document.getElementById('revolucaoBichos_lendo');
           revolucaoBichos_lendo.addEventListener('click', function(){
               const revolucaoBichos_lendo = "A revolução dos bichos";
           let id = counter += 1; 
           auth.onAuthStateChanged(user => {
               if(user) {
                   fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                       id: '_' + id, 
                       revolucaoBichos_lendo
                   }).then ( () => {
                       alert('A revolução dos bichos adicionado à lista de lendo'); 
                   }).catch(err => {
                       console.log(err.message);
                   })
               }else {
                   //console.log('user is not signed in to add livros')
               }
           })
           })

           //adicionando 1984 pelo button no database firestore
           const livro1984_lendo = document.getElementById('livro1984_lendo');
           livro1984_lendo.addEventListener('click', function(){
               const livro1984_lendo = "A revolução dos bichos";
           let id = counter += 1; 
           auth.onAuthStateChanged(user => {
               if(user) {
                   fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                       id: '_' + id, 
                       livro1984_lendo
                   }).then ( () => {
                       alert('A revolução dos bichos adicionado à lista de lendo'); 
                   }).catch(err => {
                       console.log(err.message);
                   })
               }else {
                   //console.log('user is not signed in to add livros')
               }
           })
           })

            //adicionando O conto da aia pelo button no database firestore
            const handmaids_lendo = document.getElementById('handmaids_lendo');
            handmaids_lendo.addEventListener('click', function(){
                const handmaids_lendo = "O conto da aia";
            let id = counter += 1; 
            auth.onAuthStateChanged(user => {
                if(user) {
                    fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                        id: '_' + id, 
                        handmaids_lendo
                    }).then ( () => {
                        alert('O conto da aia adicionado à lista de lendo'); 
                    }).catch(err => {
                        console.log(err.message);
                    })
                }else {
                    //console.log('user is not signed in to add livros')
                }
            })
            })

            //adicionando O milagre da manhã pelo button no database firestore
            const milagreManha_lendo = document.getElementById('milagreManha_lendo');
            milagreManha_lendo.addEventListener('click', function(){
                const milagreManha_lendo = "O milagre da manhã";
            let id = counter += 1; 
            auth.onAuthStateChanged(user => {
                if(user) {
                    fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                        id: '_' + id, 
                        milagreManha_lendo
                    }).then ( () => {
                        alert('O milagre da manhã adicionado à lista de lendo'); 
                    }).catch(err => {
                        console.log(err.message);
                    })
                }else {
                    //console.log('user is not signed in to add livros')
                }
            })
            })

             //adicionando O poder da ação pelo button no database firestore
             const poderAcao_lendo = document.getElementById('poderAcao_lendo');
             poderAcao_lendo.addEventListener('click', function(){
                 const poderAcao_lendo = "O poder da ação";
             let id = counter += 1; 
             auth.onAuthStateChanged(user => {
                 if(user) {
                     fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                         id: '_' + id, 
                         poderAcao_lendo
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
             const mindset_lendo = document.getElementById('mindset_lendo');
             mindset_lendo.addEventListener('click', function(){
                 const mindset_lendo = "Mindset: a nova psicologia do sucesso";
             let id = counter += 1; 
             auth.onAuthStateChanged(user => {
                 if(user) {
                     fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                         id: '_' + id, 
                         mindset_lendo
                     }).then ( () => {
                         alert('Mindset: a nova psicologia do sucesso adicionado à lista de lendo'); 
                     }).catch(err => {
                         console.log(err.message);
                     })
                 }else {
                     //console.log('user is not signed in to add livros')
                 }
             })
             })

              //adicionando O poder do hábito pelo button no database firestore
              const poderHabito_lendo = document.getElementById('poderHabito_lendo');
              poderHabito_lendo.addEventListener('click', function(){
                  const poderHabito_lendo = "O poder do hábito";
              let id = counter += 1; 
              auth.onAuthStateChanged(user => {
                  if(user) {
                      fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                          id: '_' + id, 
                          poderHabito_lendo
                      }).then ( () => {
                          alert('O poder do hábito adicionado à lista de lendo'); 
                      }).catch(err => {
                          console.log(err.message);
                      })
                  }else {
                      //console.log('user is not signed in to add livros')
                  }
              })
              })

              //adicionando A sutil arte de ligar o foda-se pelo button no database firestore
              const sutilArte_lendo = document.getElementById('sutilArte_lendo');
              sutilArte_lendo.addEventListener('click', function(){
                  const sutilArte_lendo = "A sutil arte de ligar o foda-se";
              let id = counter += 1; 
              auth.onAuthStateChanged(user => {
                  if(user) {
                      fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                          id: '_' + id, 
                          sutilArte_lendo
                      }).then ( () => {
                          alert('A sutil arte de ligar o foda-se adicionado à lista de lendo'); 
                      }).catch(err => {
                          console.log(err.message);
                      })
                  }else {
                      //console.log('user is not signed in to add livros')
                  }
              })
              })

              //adicionando Pequeno manual antirracista pelo button no database firestore
              const manualAntirracista_lendo = document.getElementById('manualAntirracista_lendo');
              manualAntirracista_lendo.addEventListener('click', function(){
                  const manualAntirracista_lendo = "Pequeno manual antirracista";
              let id = counter += 1; 
              auth.onAuthStateChanged(user => {
                  if(user) {
                      fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                          id: '_' + id, 
                          manualAntirracista_lendo
                      }).then ( () => {
                          alert('Pequeno manual antirracista adicionado à lista de lendo'); 
                      }).catch(err => {
                          console.log(err.message);
                      })
                  }else {
                      //console.log('user is not signed in to add livros')
                  }
              })
              })

              //adicionando A coragem de ser imperfeito pelo button no database firestore
              const coragemImperfeito_lendo = document.getElementById('coragemImperfeito_lendo');
              coragemImperfeito_lendo.addEventListener('click', function(){
                  const coragemImperfeito_lendo = "A coragem de ser imperfeito";
              let id = counter += 1; 
              auth.onAuthStateChanged(user => {
                  if(user) {
                      fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                          id: '_' + id, 
                          coragemImperfeito_lendo
                      }).then ( () => {
                          alert('A coragem de ser imperfeito adicionado à lista de lendo'); 
                      }).catch(err => {
                          console.log(err.message);
                      })
                  }else {
                      //console.log('user is not signed in to add livros')
                  }
              })
              })

                //adicionando Mentirosos pelo button no database firestore
                const mentirosos_lendo = document.getElementById('mentirosos_lendo');
                mentirosos_lendo.addEventListener('click', function(){
                    const mentirosos_lendo = "Mentirosos";
                let id = counter += 1; 
                auth.onAuthStateChanged(user => {
                    if(user) {
                        fs.collection('Livros lendo'  + ' ' + user.uid).doc('_' + id).set({
                            id: '_' + id, 
                            mentirosos_lendo
                        }).then ( () => {
                            alert('Mentirosos adicionado à lista de lendo'); 
                        }).catch(err => {
                            console.log(err.message);
                        })
                    }else {
                        //console.log('user is not signed in to add livros')
                    }
                })
                })