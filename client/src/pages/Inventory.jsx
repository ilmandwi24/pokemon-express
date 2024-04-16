import { Link } from 'react-router-dom';
import PokemonCard from '../components/PokemonCard';
import { usePokemonStore } from '../store';
import axios from 'axios';
import { toast } from 'react-toastify';

import { useState } from 'react';

import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
const Inventory = () => {
    const pokemon = usePokemonStore((state) => state.pokemon);
    const releasePokemon = usePokemonStore((state) => state.releasePokemon);
    const renameTitle = usePokemonStore((state) => state.renameTitle);
    const [updateDataName, setUpdateDataName] = useState();
    const [updateDataId, setUpdateDataId] = useState();
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);
    async function release(id){
        console.log(id)
        try {
            const response = await axios.get('/api/catch');
            let cached = response.data.catched;
            if (cached == false) {
                return toast.error("Failed Release", { position: "top-center", autoClose: 3000 });
            }
            releasePokemon(id)
            return toast.success("Success Release", { position: "top-center", autoClose: 3000 });
        } catch (error) {
            console.log(error)
        }
    }

    function updateDataModal(data){
        let {primary,name} = data;
        setUpdateDataId(primary);
        setUpdateDataName(name);
       
        onOpenModal();
        
    }

    async function ubahName(){
        let name = updateDataName
        try {
            const response = await axios.post('/api/rename', {
                name
            });
            console.log(updateDataId)
            if(response.status == 200){
                renameTitle(response.data.newName, updateDataId)
                toast.success("berhasil diubah", { position: "top-center", autoClose: 3000 })
            } else {
                toast.error("error response", { position: "top-center", autoClose: 3000 })
            }
        } catch (error) {
            console.log(error)
        } finally {
            setUpdateDataId();
            setUpdateDataName();
            onCloseModal();
        }
    }
  return (
    <div>
          <h2 className='text-xl mb-5 font-medium'>My Pokemon List</h2>
        {console.log(pokemon.length)}
          {pokemon.length == 0 ? "data kosong" : <ul className='grid grid-cols-2 gap-4 md:w-4/6 mx-auto '>
              {pokemon.map(data => (
                  <div className="mx-auto w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                      <div className="flex justify-end px-4 pt-4">
                        
                      </div>
                      <div className="flex flex-col items-center pt-5 pb-8">
                          <img className="w-24 h-24 mb-3 rounded-full shadow-lg" src={data.sprites.front_default} alt='pokemon' />
                          <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white ">{data.name}<button type="button" class="ml-1 1text-blue-700 border border-blue-700 hover:bg-blue-700 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm p-2 text-center inline-flex items-center dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:focus:ring-blue-800 dark:hover:bg-blue-500" onClick={() => updateDataModal(data)}>
                             

                              <svg class="w-3.5 h-3.5 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
                              </svg>

                              <span class="sr-only">Icon description</span>
                          </button></h5>
                          {/* <span className="text-sm text-gray-500 dark:text-gray-400">Visual Designer</span> */}
                          <div className="flex mt-4 md:mt-6">
                              <button type="button" className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => release(data.primary)}>Release</button>
                              {/* <a href="#" className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Message</a> */}
                          </div>
                      </div>
                      
                  </div>
                  
              ))}
              

          </ul>
          
          }
          <Modal open={open} onClose={onCloseModal} center>
              <div className='container w-full pt-10'>
                 
                  <input type="text" value={updateDataName} className='mb-2' onChange={e => setUpdateDataName(e.target.value)} />
                <br/>
                  <button type="button" class="focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:focus:ring-yellow-900 w-full" onClick={()=>ubahName()}>Update</button>

              </div>
          </Modal>
         
    </div>
  )
}
export default Inventory