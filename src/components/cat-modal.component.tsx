import { ComponentProps, FC } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { HeartIcon as HeartIconSolid } from '@heroicons/react/20/solid';
import { HeartIcon as HeartIconOutline } from '@heroicons/react/24/outline';
import { Button as ButtonFlowbite, Modal } from 'flowbite-react';
import { Button } from 'components/button.component';
import { useGetSingleCatData } from '../api/use-get-single-cat-data.hook';
import { useLikeApi } from '../api/use-like-api.hook';

interface CatModalProps {
  onClick?: ComponentProps<'button'>['onClick'];
  isLoading?: boolean;
  color?: ComponentProps<typeof ButtonFlowbite>['color'];
}

export const CatModal: FC<CatModalProps> = ({}) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const catId = searchParams.get('catId');
  const { data, isLoading, isError } = useGetSingleCatData({ id: catId });
  const { like, isLiked, dislike } = useLikeApi();
  const showModal = !!catId;
  const isCatLikes = isLiked(String(catId));

  const closeModal = () => setSearchParams({});

  const handleLikeButton = () => {
    if (isCatLikes) {
      dislike(String(catId));
    } else {
      like(String(catId));
    }
  };
  return (
    <>
      <Modal show={showModal} onClose={closeModal}>
        <Modal.Header>
          {data?.breeds?.map((b) => b.name).join(',') || 'Cat Leo'}
        </Modal.Header>
        <Modal.Body>
          <div className="flex flex-col gap-6">
            {data?.url && (
              <div className="relative">
                <div className="absolute top-4 right-4">
                  <Button size="small" onClick={handleLikeButton}>
                    {isCatLikes ? (
                      <HeartIconSolid className="h-6 w-6" />
                    ) : (
                      <HeartIconOutline className="h-6 w-6" />
                    )}
                  </Button>
                </div>
                <img src={data?.url} />
              </div>
            )}
            {data?.breeds && (
              <>
                <p>{data?.breeds && data?.breeds[0].description}</p>
                <Link to={`/cat/${catId}`}>
                  <Button>Learn more</Button>
                </Link>
              </>
            )}
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};
