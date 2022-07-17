const { Router } = require( 'express' );
const { get,
        getAll,
        add,
        update,
        updatePartial,
        remove } = require( '../controllers/user.controller' );

const router = Router();

router.get( '/:id' , get )

router.get( '/' , getAll )

router.post( '/' , add )

router.put( '/:id' , update )

router.patch( '/:id' , updatePartial )

router.delete( '/:id' , remove )

module.exports = router;