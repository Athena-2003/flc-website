import React, { useState } from 'react';
import { IoIosFolderOpen } from 'react-icons/io';
import { SlOptionsVertical } from 'react-icons/sl';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogClose,
  DialogDescription,
} from '~/components/ui/dialog';
import { Button } from '~/components/ui/button';

export interface CloudinaryResource {
  asset_id: string;
  public_id: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: string;
  bytes: number;
  width: number;
  height: number;
  folder: string;
  url: string;
  secure_url: string;
}

export interface CloudinaryResponse {
  resources: CloudinaryResource[];
}

interface FolderIconProps {
  name: string;
  path: string;
  setRootPath: React.Dispatch<React.SetStateAction<string>>;
  setPathArray: React.Dispatch<React.SetStateAction<string[]>>;
  fetchImagesByPathOfFolder:(path:string)=>void // Use CloudinaryResource[]
}
export const createPathArray = (url: string): string[] => {
  return url.split('/').filter(segment => segment.trim() !== '');
};


export default function FolderIcon({
  name,
  path,
  setRootPath,
  setPathArray,
  fetchImagesByPathOfFolder
}: FolderIconProps) {
  const [deleteAlert, setDeleteAlert] = useState<boolean>(false);
  

  const deleteDir = async () => {
    try {
      const response = await fetch('/api/cloudinary/deleteDir', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ path }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      // const data = await response.json();
      console.log('Deleted successfully:');
      setDeleteAlert(false);
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  return (
    <div>
    <div className='p-4 flex items-center'>
      <IoIosFolderOpen
        className='text-2xl hover:text-slate-700'
        onClick={() => {
          fetchImagesByPathOfFolder(path); // Fetch images when folder is selected
          setRootPath(path);
          const pathArray = createPathArray(path);
          setPathArray(pathArray);
          
        }}
      />
      <div>&nbsp; {name} &nbsp;</div>
      <SlOptionsVertical
        className='hover:text-slate-700'
        onClick={() => setDeleteAlert(true)}
        
      />

      {deleteAlert && (
        <Dialog open={deleteAlert} onOpenChange={setDeleteAlert}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Confirm Deletion</DialogTitle>
              <DialogDescription>
                Are you sure you want to delete this folder?
              </DialogDescription>
            </DialogHeader>

            <DialogFooter>
              <DialogClose asChild>
                <Button variant="secondary" onClick={() => setDeleteAlert(false)}>
                  Cancel
                </Button>
              </DialogClose>
              <Button className='bg-red-500' onClick={deleteDir}>
                Confirm
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
</div>

   
    </div>
  );
}
